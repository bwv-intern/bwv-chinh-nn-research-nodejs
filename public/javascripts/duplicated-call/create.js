jQuery.validator.addMethod('duplicatedEmail', function (email, element) {
  let isNotExited = true;
  $.ajax({
    type: 'get',
    url: '/users/email',
    data: {
      email,
    },
    async: false,
    success: function (result) {
      isNotExited = false;
    },
    error: function (error) {
      isNotExited = true;
    },
  });
  return this.optional(element) || isNotExited;
});
