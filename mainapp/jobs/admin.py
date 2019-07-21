from django.contrib import admin

from .models import Job

# class RecipeIngredientInline(admin.TabularInline):
#     model = RecipeIngredient


@admin.register(Job)
class RecipeAdmin(admin.ModelAdmin):
    pass
    # inlines = [RecipeIngredientInline]
