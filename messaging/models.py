from django.db import models
from accounts.models import User
from vehicles.models import Vehicle

class Conversation(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='conversations')
    participant_1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='conversations_initiated') # Buyer
    participant_2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='conversations_received') # Seller
    created_at = models.DateTimeField(auto_now_add=True)
    last_message_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Conversation for {self.vehicle}"

class Message(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    read_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Message from {self.sender} at {self.sent_at}"
