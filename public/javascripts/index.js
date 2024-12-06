$(document).ready(function () {
  $('#myTable').DataTable();
});

$('form.filter').on('submit', function (event) {
  $('#dateStart').val();
  if ($('#dateStart').val() > $('#dateEnd').val()) {
    event.preventDefault();
    $('.filter-error').html('(*) Start Date can not greater than End Date.');
    return;
  }
});
