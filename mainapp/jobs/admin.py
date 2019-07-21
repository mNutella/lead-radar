from django.contrib import admin

from .models import Job, Employer, Company


@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    pass

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    pass

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    pass
