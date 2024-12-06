jQuery.validator.addMethod('phoneVN', function (phoneNumber, element) {
  phoneNumber = phoneNumber.replace(/\s+/g, '');
  return (
    this.optional(element) ||
    (phoneNumber.length > 9 &&
      phoneNumber.match(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/))
  );
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
  onfocusout: function (element) {
    $(element).valid();
  },
  messages: {
    name: 'Name is required',
    phoneNumber: {
      required: 'Phone number is required',
      phoneVN: 'Not valid Vietnamese phone number',
    },
    email: {
      required: 'Email is required',
      email: 'Not valid email',
    },
    age: {
      required: 'Age is required',
      age: 'Age must be number',
    },
    gender: 'Gender is required',
    office: 'Office is required',
    position: 'Position is required',
    startDate: 'Start date is required',
  },
});
