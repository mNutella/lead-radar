from graphene_django import DjangoObjectType
import graphene
from .models import User


class MyUser(DjangoObjectType):
    class Meta:
        model = User


class Query(graphene.ObjectType):
    users = graphene.List(MyUser)

    def resolve_users(self, info):
        return User.objects.all()


schema = graphene.Schema(query=Query)
