$(function () {
  //carousel interval to 2000 ms, play and pause button functionality
  $(".carousel").carousel({ interval: 2000 });

  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  })

  //hide search table and show initial reserve form on opening modal
  $("#reserveButton").click(function () {
    $("#reserveModal").modal("toggle");

    if ($("#reserveForm").hasClass("d-none")) {
      $("#reserveForm").removeClass("d-none");
      $("#reserveTable").addClass("d-none");
    }
  })

  //show search table in reserve modal after clicking search button
  $("#reserveSearch").click(function () {
    $("#reserveForm").addClass("d-none");
    $("#reserveTable").removeClass("d-none");
  })

  //return to initial form in reserve modal after clicking back button from table view
  $("#reserveBack").click(function () {
    $("#reserveForm").removeClass("d-none");
    $("#reserveTable").addClass("d-none");
  })

  $("#loginButton").click(function () {
    $("#loginModal").modal("toggle");
  })
});