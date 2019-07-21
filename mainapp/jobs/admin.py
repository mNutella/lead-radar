from django.contrib import admin

from .models import Jobs

# class RecipeIngredientInline(admin.TabularInline):
#     model = RecipeIngredient


@admin.register(Jobs)
class RecipeAdmin(admin.ModelAdmin):
    pass
    # inlines = [RecipeIngredientInline]
