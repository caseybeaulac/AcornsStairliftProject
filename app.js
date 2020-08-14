$(function () {
  $("body").on("click", "#btnQuote", function () {
    let valid = true;
    $(".txtQuote").each(function () {
      if ($(this).val() == "") {
        console.log("hello");
        valid = false;
        $(this).css("border-color", "red");
        $("#errorLabel").css("display", "block");
      } else if ($(this).val() != "") {
        $(this).css("border-color", "#ced4da");
      }
    });
    if (valid) {
      $("#errorLabel").css("display", "none");
    }
  });

  $("#btnGetQuoted").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#quote").offset().top,
      },
      "slow"
    );
  });
});
