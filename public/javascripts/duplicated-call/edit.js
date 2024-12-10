const idUser = $('.id_user').val();

jQuery.validator.addMethod('duplicatedEmail', function (email, element) {
  let isNotExited = true;
  $.ajax({
    type: 'get',
    url: '/users/email',
    async: false,
    data: {
      email,
      idUser,
    },
    success: function (result) {
      isNotExited = false;
    },
    error: function (error) {
      isNotExited = true;
    },
  });
  return this.optional(element) || isNotExited;
});
