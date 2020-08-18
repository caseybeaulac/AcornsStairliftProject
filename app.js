$(function () {
  $("body").on("click", "#btnQuote", function () {
    let valid = true;
    $(".txtQuote").each(function () {
      if ($(this).val() == "") {
        valid = false;
        $(this).css("border-color", "red");
        $("#errorLabel").css("display", "inline");
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
    let passwordLength = $("#txtPassword").val().length;
    let confirmPasswordLength = $("#txtConfirmPassword").val().length;

    $(".txtSignup").each(function () {
      if ($(this).val() == "") {
        valid = false;
        $(this).css("border-color", "red");
        $("#errorLabelSignUp").css("display", "block");
      } else if ($(this).val() != "") {
        $(this).css("border-color", "#ced4da");
      }
    });

    if (passwordLength != 0 && confirmPasswordLength != 0) {
      if (pw1 != pw2) {
        $("#errorLabel2").css("display", "block");
      } else {
        $("#errorLabel2").css("display", "none");
      }
    }
    if (passwordLength != 0 && confirmPasswordLength != 0) {
      if (passwordLength < 8 && confirmPasswordLength < 8) {
        $("#errorPassword").css("display", "block");
      } else {
        $("#errorPassword").css("display", "none");
      }
    }

    if (valid) {
      $("#errorLabelSignUp").css("display", "none");
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
