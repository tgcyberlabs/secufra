$(document).ready(function () {});

$(function () {
  $(".form-holder").delegate("input", "focus", function () {
    $(".form-holder").removeClass("active");
    $(this).parent().addClass("active");
  });
});

$("#submit_btn").click(function () {
  if (!$("#txtname").val()) {
    alert("Please Enter Requird name");
    $(this).focus();
  } else if (!$("#txtemail").val()) {
    alert("Please Enter Requird email");
    $(this).focus();
  } else if (!$("#txtmob").val()) {
    alert("Please Enter Requird mob");
    $(this).focus();
  } else if (!$("#txtcollege").val()) {
    alert("Please Enter Requird college");
    $(this).focus();
  } else if (!$("#txtdob").val()) {
    alert("Please Enter Requird date");
    $(this).focus();
  } else if (!$("#txtcity").val()) {
    alert("Please Enter Requird city");
    $(this).focus();
  } else if ($("#txtmob").val().length != 13) {
    alert("Enter Valid Mobile Number,with country code");
    $(this).focus();
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
