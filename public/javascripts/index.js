$(document).ready(function () {
  new DataTable('#myTable');
});

function checkDate(event) {
  let isValid = true;
  if (
    $('#dateStart').val() &&
    $('#dateEnd').val() &&
    $('#dateStart').val() > $('#dateEnd').val()
  ) {
    event.preventDefault();
    $('.filter-error').html('(*) Start Date can not greater than End Date.');
    $('button.filter-btn').attr('disabled', true);
    isValid = false;
  } else {
    $('button.filter-btn').attr('disabled', false);
    $('.filter-error').html('');
  }
  return isValid;
}

$('#dateStart').on('change', function (event) {
  checkDate(event);
});

$('#dateEnd').on('change', function (event) {
  checkDate(event);
});

$('form.filter').on('submit', function (event) {
  const isValid = checkDate(event);
  if (!isValid) return;

  $('.overlay').removeClass('hidden');
  $('.loading-filter').removeClass('hidden');
  $('button.filter-btn').attr('disabled', true);
  $('#dateStart').val();
});

$('form.del').on('submit', function event() {
  $('.overlay').removeClass('hidden');
  $(this).find('.loading-del').removeClass('hidden');
  $(this).find('button.del-btn').attr('disabled', true);
});

$('.edit-anchor').on('click', function () {
  $('.overlay').removeClass('hidden');
  $(this).find('.loading-edit').removeClass('hidden');
  $(this).addClass('pointer-events-none');
});
