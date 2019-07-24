import graphene
from cities_light.models import City, Region
from graphene_django import DjangoObjectType

from .models import Company, Employer, Job, Plan, Subscription, Role
from .constants import ModelExceptionTypes


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


class RoleType(DjangoObjectType):
    class Meta:
        model = Role


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
    company = graphene.Field(CompanyType)
    location = graphene.Field(CityType)
    link = graphene.String()
    contact_email = graphene.Field(EmployerType)
    role = graphene.Field(RoleType)
    approved = graphene.Boolean()
    created_date = graphene.DateTime()

    class Arguments:
        company = graphene.String()
        location = graphene.String()
        link = graphene.String()
        contact_email = graphene.String()
        role = graphene.String()

    def mutate(self, info, **kwargs):
        try:
            if Employer.objects.filter(email=kwargs.get("contact_email")).exists():
                _employer = Employer.objects.get(email=kwargs.get("contact_email"))
            else:
                _employer = Employer.objects.create(email=kwargs.get("contact_email"))

            if not _employer:
                raise Exception(ModelExceptionTypes.EMPLOYER)

            if Company.objects.filter(name=kwargs.get("company")).exists():
                _company = Company.objects.get(name=kwargs.get("company"))
            else:
                _company = Company.objects.create(name=kwargs.get("company"))

            if not _company:
                raise Exception(ModelExceptionTypes.COMPANY)

            _city = City.objects.get(id=kwargs.get("location"))

            if not _city:
                raise Exception(ModelExceptionTypes.CITY)

            if Role.objects.filter(name=kwargs.get("role")).exists():
                _role = Role.objects.get(name=kwargs.get("role"))
            else:
                _role = Role.objects.create(name=kwargs.get("role"))

            if not _role:
                raise Exception(ModelExceptionTypes.ROLE)

            _job = Job.objects.create(
                company=_company,
                location=_city,
                link_to_desc=kwargs.get("link"),
                contact_email=_employer,
                role=_role,
                approved=False,
            )

            if not _job:
                raise Exception(ModelExceptionTypes.JOB)

            return CreateJob(
                id=_job.id,
                company=_job.company,
                location=_job.location,
                link=_job.link_to_desc,
                contact_email=_job.contact_email,
                role=_job.role,
                approved=_job.approved,
                created_date=_job.created_date,
            )
        except Exception as error:
            if error == ModelExceptionTypes.EMPLOYER:
                raise Exception("Create 'Employer' failed")
            elif error == ModelExceptionTypes.COMPANY:
                raise Exception("Create 'Company' failed")
            elif error == ModelExceptionTypes.CITY:
                raise Exception("Create 'City' failed")
            elif error == ModelExceptionTypes.ROLE:
                raise Exception("Create 'Role' failed")
            elif error == ModelExceptionTypes.JOB:
                raise Exception("Create 'Job' failed")
            else:
                raise Exception("Created 'Other' failed | " + str(error))


class Mutation(graphene.ObjectType):
    create_job = CreateJob.Field()
