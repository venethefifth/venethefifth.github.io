var sendText = function() {
  alert('button pressed!');
  var phoneInput = document.getElementById('phone-number');
  var phoneNumber = phoneInput.value;
  maestro.Twilio.sendSms('6508985748', 'I love you!')
};
