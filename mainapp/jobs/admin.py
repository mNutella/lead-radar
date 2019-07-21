from django.contrib import admin

from .models import Job, Employer


@admin.register(Employer)
class JAdmin(admin.ModelAdmin):
    pass

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    pass
