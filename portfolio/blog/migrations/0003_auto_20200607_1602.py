# Generated by Django 3.0.7 on 2020-06-07 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20200607_1548'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=250)),
                ('date', models.DateField()),
            ],
        ),
        migrations.DeleteModel(
            name='all_blogs',
        ),
    ]
