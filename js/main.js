$(document).ready(function () {});

$(function () {
  $(".form-holder").delegate("input", "focus", function () {
    $(".form-holder").removeClass("active");
    $(this).parent().addClass("active");
  });
});

$("#submit_btn").click(function () {
  if (!$("#txtname").val()) {
    alert("Please Enter Requird Feild");
  } else {
    $("#staticBackdrop").modal("show");
  }
});

// action =
//   "https://docs.google.com/forms/d/e/1FAIpQLSde2cP3cXpaDZuijwZgB_npehx0xs21Xk-WaRIbXOvcCOscCA/formResponse";
