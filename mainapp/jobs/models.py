from __future__ import unicode_literals

import uuid

from django.db import models  # noqa


class Employer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=320, blank=True, unique=True)
    activated = models.BooleanField(default=False)


class Role(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=250, blank=True)


class Company(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=300, blank=True)


class Plan(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150, blank=True)
    num_ads = models.IntegerField(default=0)
    price = models.IntegerField(default=0)
    days = models.IntegerField(default=0)


class Subscription(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()


class Job(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    location = models.ForeignKey("cities_light.City", on_delete=models.CASCADE)
    link_to_desc = models.URLField(max_length=2000)
    contact_email = models.ForeignKey(Employer, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    approved = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
