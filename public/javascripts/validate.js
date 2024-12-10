function _requiredMessage(name) {
  return `(*) ${name} is required field.`;
}

jQuery.validator.addMethod('phoneVN', function (phoneNumber, element) {
  phoneNumber = phoneNumber.replace(/\s+/g, '(*) ');
  return (
    this.optional(element) ||
    (phoneNumber.length > 9 &&
      phoneNumber.match(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/))
  );
});

let isNotExisted = true;
jQuery.validator.addMethod('duplicatedEmail', function (email, element) {
  $.ajax({
    method: 'get',
    url: '/users/email/' + email,
    async: false,
    success: function (result) {
      isNotExisted = false;
      $('.loading-add').addClass('hidden');
      $('.loading-update').addClass('hidden');
    },
    error: function (error) {
      isNotExisted = true;
      $('.loading-add').addClass('hidden');
      $('.loading-update').addClass('hidden');
    },
  });
  return this.optional(element) || isNotExisted;
});

$('form').validate({
  rules: {
    name: {
      required: true,
      maxlength: 255,
    },
    phoneNumber: {
      required: true,
      phoneVN: true,
    },
    email: {
      required: true,
      maxlength: 255,
      duplicatedEmail: true,
      email: true,
    },
    age: {
      required: true,
      number: true,
      maxlength: 11,
    },
    gender: {
      required: true,
    },
    office: {
      required: true,
    },
    position: {
      required: true,
    },
    startDate: {
      required: true,
    },
  },
  messages: {
    name: _requiredMessage('Name'),
    phoneNumber: {
      required: _requiredMessage('Phone number'),
      phoneVN: '(*) Not valid Vietnamese phone number',
    },
    email: {
      required: _requiredMessage('Email'),
      email: '(*) Not valid email',
      duplicatedEmail: '(*) Email already exist.',
    },
    age: {
      required: _requiredMessage('Age'),
      age: '(*) Age must be number',
    },
    gender: _requiredMessage('Gender'),
    office: _requiredMessage('Office'),
    position: _requiredMessage('Position'),
    startDate: _requiredMessage('Start date'),
  },
  onfocusout: function (element) {
    $(element).valid();
  },
});
