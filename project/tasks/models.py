from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User

class Task1Play(models.Model):
    user    = models.ForeignKey(User,related_name="plays", editable=False, on_delete=models.CASCADE)
    start   = models.DateTimeField(auto_now_add=True,editable = False)
    right   = models.PositiveIntegerField(verbose_name="Number of right answers",default=0)
    wrong   = models.PositiveIntegerField(verbose_name="Number of wrong answers",default=0)
    end     = models.DateTimeField(editable = False, null=True, blank=True)
    finished = models.BooleanField(default=False)
    duration = models.DurationField(null=True)

    def __unicode__(self):
        return "%s" %(self.user)
    
    class Meta:
        ordering = ['duration','-wrong']

class PackmolPlay(models.Model):
    user    = models.ForeignKey(User,related_name="packmols", editable=False, on_delete=models.CASCADE)
    chebi   = models.CharField(max_length=30)
    cell    = models.CharField(max_length=30)
    group   = models.CharField(max_length=10)
    mol     = models.TextField()
    score   = models.FloatField(null=True)

    def __unicode__(self):
        return "%s - %s" %(self.user,self.chebi)

    def __str__(self):
        return "%s %s %s" %(self.user,self.chebi, self.group)

