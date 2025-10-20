from asyncio.log import logger
from random import random
from django.db.models.signals import post_migrate, post_save, pre_save
from django.dispatch import receiver
from django.conf import settings
from .models import Role, User
import os


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


@receiver(pre_save, sender=User)
def delite_old_profile_picture(sender, instance, **kwargs):
    if instance.pk:
        try:
            old_instance = sender.objects.get(pk=instance.pk)
            old_image = old_instance.image
            new_image = instance.image

            if old_image and old_image != new_image:
                default_avatar_folder = os.path.join(
                    settings.MEDIA_ROOT, "default_avatar"
                )

                if not old_image.path.startswith(default_avatar_folder):
                    if os.path.exists(old_image.path):
                        os.remove(old_image.path)
        except sender.DoesNotExist:
            pass
