from django.contrib import admin

from .models import Company, Employer, Job, Plan, Subscription


@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    list_display = ("id", "email", "activated")
    list_filter = ("activated",)
    search_fields = ("email",)
    ordering = ("email",)


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)
    ordering = ("name",)


@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price", "days")
    list_filter = ("name",)
    search_fields = ("name",)
    ordering = ("name",)


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "get_plan_name",
        "get_employer_email",
        "start_date",
        "end_date",
    )
    list_filter = ("plan__name", "start_date")
    search_fields = ("plan__name", "employer__email")
    ordering = ("start_date", "end_date")

    def get_plan_name(self, obj):
        return obj.plan.name

    get_plan_name.admin_order_field = "plan"
    get_plan_name.short_description = "Plan"

    def get_employer_email(self, obj):
        return obj.employer.email

    get_employer_email.admin_order_field = "employer"
    get_employer_email.short_description = "Employer"


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)
    ordering = ("name",)


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "get_company_name",
        "get_contact_email",
        "get_location",
        "get_role_name",
        "link_to_desc",
        "approved",
        "created_date",
    )
    list_filter = ("approved", "created_date")
    search_fields = (
        "contact_email__email",
        "title",
        "company__name",
        "location__display_name",
    )
    ordering = ("created_date",)

    def get_company_name(self, obj):
        return obj.company.name

    get_company_name.admin_order_field = "company"
    get_company_name.short_description = "Company"

    def get_contact_email(self, obj):
        return obj.contact_email.email

    get_contact_email.admin_order_field = "contact_email"
    get_contact_email.short_description = "Contact Email"

    def get_location(self, obj):
        return obj.location.region

    get_location.admin_order_field = "location"
    get_location.short_description = "Location"

    def get_role_name(self, obj):
        return obj.role.name

    get_role_name.admin_order_field = "role"
    get_role_name.short_description = "role"
