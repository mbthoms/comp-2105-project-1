// JS Document
$(document).ready(function() {
  $("input[type='checkbox']").change(function() {
    if ($(this).is(":checked")) {
      $('body').addClass("greenBackground");
    } else {
      $('body').removeClass("greenBackground");
    }
  });
});
