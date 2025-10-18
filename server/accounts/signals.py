from asyncio.log import logger
from random import random
from django.db.models.signals import post_migrate, post_save
from django.dispatch import receiver
from .models import Role, User


@receiver(post_migrate)
def create_default_roles(sender, **kwargs):
    if sender.name == "accounts":
        default_roles = ["super_admin", "seller", "user"]
        for role in default_roles:
            Role.objects.get_or_create(name=role)


@receiver(post_save, sender=User)
def assign_user_role(sender, instance, created, **kwargs):
    if created:
        try:
            user_role = Role.objects.get(name="user")
            instance.role = user_role
            instance.save()

        except Role.DoesNotExist:
            pass


@receiver(post_save, sender=User)
def user_wallet_balance(sender, instance, created, **kwargs):
    if created:
        instance.wallet_balance = 1000.00
        instance.save()


@receiver(post_save)
def log_model_save(sender, instance, created, **kwargs):
    if created:
        logger.info(f"New {sender.__name__} created: {instance}")
    else:
        logger.info(f"{sender.__name__} updated: {instance}")
