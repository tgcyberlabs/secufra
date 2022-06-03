$(document).ready(function () {});

$(function () {
  $(".form-holder").delegate("input", "focus", function () {
    $(".form-holder").removeClass("active");
    $(this).parent().addClass("active");
  });
});

$("#submit_btn").click(function () {
  if (!$(".material-textfield").val()) {
    alert("Please Enter Requird Feild");
  } else {
    $("#staticBackdrop").modal("show");
  }
});

// function fnMobVerify() {
//   var x = "";
//   var patt = new RegExp("d{3}d{2}d{4}");
//   x = document.getElementById("txtmob");

//   var res = patt.test(x.value);
//   if (!res) {
//     x.value = x.value
//       .match(/\d*/g)
//       .join("")
//       .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
//       .slice(1)
//       .join("-")
//       .replace(/-*$/g, "");
//   }
// }
// action =
//   "https://docs.google.com/forms/d/e/1FAIpQLSde2cP3cXpaDZuijwZgB_npehx0xs21Xk-WaRIbXOvcCOscCA/formResponse";
