import graphene
from cities_light.models import City, Region
from graphene_django import DjangoObjectType

from .models import Company, Employer, Job, Plan, Subscription
from .constants import JobException


class EmployerType(DjangoObjectType):
    class Meta:
        model = Employer


class CompanyType(DjangoObjectType):
    class Meta:
        model = Company


class PlanType(DjangoObjectType):
    class Meta:
        model = Plan


class SubscriptionType(DjangoObjectType):
    class Meta:
        model = Subscription


class RegionType(DjangoObjectType):
    class Meta:
        model = Region


class CityType(DjangoObjectType):
    region = graphene.Field(RegionType)
    class Meta:
        model = City


class JobType(DjangoObjectType):
    class Meta:
        model = Job


class Query(graphene.ObjectType):
    jobs = graphene.List(JobType)

    def resolve_jobs(self, info):
        return Job.objects.filter(approved=True)


class CreateJob(graphene.Mutation):
    id = graphene.String()
    title = graphene.String()
    company = graphene.Field(CompanyType)
    location = graphene.Field(CityType)
    link = graphene.String()
    contact_email = graphene.Field(EmployerType)
    plan = graphene.Field(PlanType)
    approved = graphene.Boolean()
    created_date = graphene.DateTime()

    class Arguments:
        title = graphene.String()
        company = graphene.String()
        location = graphene.String()
        link = graphene.String()
        contact_email = graphene.String()
        plan = graphene.String()

    def mutate(self, info, **kwargs):
        try:
            if Employer.objects.filter(email=kwargs.get("contact_email")).exists():
                _employer = Employer.objects.get(email=kwargs.get("contact_email"))
            else:
                _employer = Employer.objects.create(email=kwargs.get("contact_email"))

            if not _employer:
                raise Exception(JobException.EMPLOYER)

            if Company.objects.filter(name=kwargs.get("company")).exists():
                _company = Company.objects.get(name=kwargs.get("company"))
            else:
                _company = Company.objects.create(name=kwargs.get("company"))

            if not _company:
                raise Exception(JobException.COMPANY)

            _city = City.objects.get(id=kwargs.get("location"))

            if not _city:
                raise Exception(JobException.CITY)

            if not Plan.objects.filter(id=kwargs.get("plan")).exists():
                raise Exception("Plan doesn't exists!")

            _plan = Plan.objects.get(id=kwargs.get("plan"))

            if not _plan:
                raise Exception(JobException.PLAN)

            _job = Job.objects.create(
                title=kwargs.get("title"),
                company=_company,
                location=_city,
                link_to_desc=kwargs.get("link"),
                contact_email=_employer,
                plan=_plan,
                approved=False,
            )

            if not _job:
                raise Exception(JobException.JOB)

            return CreateJob(
                id=_job.id,
                title=_job.title,
                company=_job.company,
                location=_job.location,
                link=_job.link_to_desc,
                contact_email=_job.contact_email,
                plan=_job.plan,
                approved=_job.approved,
                created_date=_job.created_date,
            )
        except Exception as error:
            if error == JobException.EMPLOYER:
                raise Exception("Create 'Employer' failed")
            elif error == JobException.COMPANY:
                raise Exception("Create 'Company' failed")
            elif error == JobException.CITY:
                raise Exception("Create 'City' failed")
            elif error == JobException.PLAN:
                raise Exception("Create 'Plan' failed")
            elif error == JobException.JOB:
                raise Exception("Create 'Job' failed")
            else:
                raise Exception("Created 'Other' failed | " + str(error))



class Mutation(graphene.ObjectType):
    create_job = CreateJob.Field()
