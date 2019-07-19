from django.conf import settings
# from django.conf.urls import include, url  # django < 2.0
from django.urls import include, path
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

import django_js_reverse.views
from graphene_django.views import GraphQLView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('jsreverse/', django_js_reverse.views.urls_js, name='js_reverse'),

    path('', TemplateView.as_view(template_name='mainapp/index.html'), name='home'),
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns

# For Django < 2.0
# urlpatterns = [
#     url(r'^admin/', admin.site.urls),
#     url(r'^jsreverse/$', django_js_reverse.views.urls_js, name='js_reverse'),

#     url(r'^$', TemplateView.as_view(template_name='mainapp/index.html'), name='home'),
#     url(r'^graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),
# ]

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns = [
#         url(r'^__debug__/', include(debug_toolbar.urls)),
#     ] + urlpatterns
