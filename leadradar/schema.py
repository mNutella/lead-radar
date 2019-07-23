import graphene
from graphene_django.debug import DjangoDebug

from mainapp.jobs import schema as jobs_schema


class Query(jobs_schema.Query, graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name="_debug")


class Mutation(jobs_schema.Mutation, graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name="_debug")


schema = graphene.Schema(query=Query, mutation=Mutation)
