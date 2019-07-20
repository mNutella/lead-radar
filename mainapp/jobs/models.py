from __future__ import unicode_literals

import uuid

from django.db import models  # noqa


class Employers(models.Model):
    pass

class Companies(models.Model):
    pass

class Plans(models.Model):
    pass

class Jobs(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    company = models.ForeignKey(Companies, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    location = models.ForeignKey('cities.Region', on_delete=models.CASCADE)
    link_to_desc = models.URLField(max_length=2000)
    contact_email = models.ForeignKey(Employers, on_delete=models.CASCADE)
    plan = models.ForeignKey(Plans, on_delete=models.CASCADE)
    approved = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
