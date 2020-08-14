$(function () {
  $("body").on("click", "#btnQuote", function () {
    let valid = true;
    $(".txtQuote").each(function () {
      if ($(this).val() == "") {
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

  $("body").on("click", "#btnSignup", function () {
    let valid = true;
    let pw1 = $("#txtPassword").val();
    let pw2 = $("#txtConfirmPassword").val();

    $(".txtSignup").each(function () {
      if ($(this).val() == "") {
        valid = false;
        $(this).css("border-color", "red");
        $("#errorLabel").css("display", "block");
      } else if ($(this).val() != "") {
        $(this).css("border-color", "#ced4da");
      }
    });

    if (pw1 != pw2) {
      $("#errorLabel2").css("display", "block");
      valid = false;
    } else {
      $("#errorLabel2").css("display", "none");
    }

    if (valid) {
      $("#errorLabel").css("display", "none");
      $("#errorLabel2").css("display", "none");
    }
  });

  $("body").on("click", "#btnGoToSignUp", function () {
    window.location.href = "signup.html";
  });

  $("body").on("click", "#btnCancel", function () {
    window.location.href = "index.html";
  });

  $("body").on("click", "#btnCancel", function () {
    window.location.href = "index.html";
  });

  $("body").on("click", "#btnCancel", function () {
    window.location.href = "index.html";
  });
});
