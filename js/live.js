try {
  Typekit.load();
} catch (e) {}

$(document).on("click", function() {
  document.documentElement.webkitRequestFullscreen();
})

$(document).on("ready", function() {
  if (typeof localStorage.name == "string") {
    $("body").addClass(localStorage.getItem("pushString"));
  }
  var textElements = [
    "cBugShow",
    "cBugGame",
    "bannerTitle",
    "bannerSub",
    "infoBarBanner",
    "comingUpTitle",
    "infoBarComingUp",
    "tName",
    "tHandle",
    "twitterContent",
    "infoBarTwitter",
    "nameLeftName",
    "nameLeftHandle",
    "nameRightName",
    "nameRightHandle",
    "nBarPerson1Name",
    "nBarPerson1Title",
    "nBarPerson2Name",
    "nBarPerson2Title",
    "nBarPerson3Name",
    "nBarPerson3Title",
    "nBarPerson4Name",
    "nBarPerson4Title",
    "nBarPerson5Name",
    "nBarPerson5Title",
    "infoBarNameBar",
    "nameBarNumber",
    "cardName",
    "cardHandle",
    "cardBody",
    "cardInfo1",
    "cardInfo2",
    "fullSocialBg",
    "cBugSponsorImage",
    "scheduleOne",
    "scheduleTwo",
    "scheduleThree",
    "scheduleFour",
    "scheduleFive",
    "scheduleNumber"
  ];
  var iconTypes = [
    "bannerIcon",
    "comingUpIcon",
    "fullSocialIcon",
    "nameLeftIcon",
    "nameRightIcon",
    "comingUpIcon",
    "tIcon"
  ];

  var scheduleImages = [
    "scheduleOne",
    "scheduleTwo",
    "scheduleThree",
    "scheduleFour",
    "scheduleFive"
  ];

  $.each(textElements, function(i, value) {
    if (localStorage.getItem(value) !== null) {
      if (value === "fullSocialBg") {
        $('#fullBG').css("background-image", 'url("' + localStorage.getItem(value) + '")');
      } if (value === "cBugSponsorImage") {
        $('.cBugSponsorImage').attr('src', localStorage.getItem(value));
        console.log("this is the entered value => " + localStorage.getItem(value));
      } if (scheduleImages.indexOf(value) >= 0) {
        $('#' + value).css("background-image", 'url("' + localStorage.getItem(value) + '")');
      } else {
        $('#' + value).text(localStorage.getItem(value));
      }
    }
  });
  $.each(iconTypes, function(i, value) {
    if (localStorage.getItem(value) !== null) {
      $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
    }
  });

  window.addEventListener('storage', function(event) {
    if (event.key == "updateString") {
      $("body")[0].className = localStorage.getItem("pushString");

      // if (event.key == "updateString" && $("body").hasClass("fullSocial-on")) {
      //   var video = document.getElementById('socialVideo')
      //   video.currentTime = 0;
      //   video.load();
      // }

      $.each(textElements, function(i, value) {
         if (localStorage.getItem(value) !== null) {
          if (value === "fullSocialBg") {
            $('#fullBG').css("background-image", 'url("' + localStorage.getItem(value) + '")');
          } if (value === "cBugSponsorImage") {
            $('.cBugSponsorImage').attr('src', localStorage.getItem(value));
            console.log("this is the entered value => " + localStorage.getItem(value));
          } if (scheduleImages.indexOf(value) >= 0) {
            $('#' + value).css("background-image", 'url("' + localStorage.getItem(value) + '")');
          } else {
              $('#' + value).text(localStorage.getItem(value));
          }
        }
      });
      $.each(iconTypes, function(i, value) {
        if (localStorage.getItem(value) !== null) {
          $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
        }
      });
      animationHeighIni();
    }

  });

  // Cahnge Element Heights Based on content

  function bannerHeight() {
    var lh = $('#banner .lowerContent').height();
    var lowerh = lh + 40;
    $('.banner-on #banner .lower').css('max-height', lowerh);
  };

  function tCardHeight() {
    var lh = $('#tCard .lowerContent').height();
    var lowerh = lh + 40;
    $('.tCard-on #tCard .lower').css('max-height', lowerh);
  };

  function comingUpHeight() {
    var lh = $('#comingUp .lowerContent').height();
    var lowerh = lh + 40;
    $('.comingUp-on #comingUp .lower').css('max-height', lowerh);
  };

  function fullHeight() {
    var lh = $('#fullBG .centerCardBlock').height();
    var lowerh = lh + 115;
    $('.fullSocial-on #fullBGCard .cardContent').css('max-height', lowerh);
  };

  function animationHeight() {
    if (event.key == "bannerTitle") {
      bannerHeight();
    };

    if (event.key == "twitterContent") {
      tCardHeight();
    };

    if (event.key == "comingUpTitle") {
      comingUpHeight();
    };

    if (event.key == "cardBody") {
      fullHeight();
    };
  };

  function animationHeighIni() {
    bannerHeight();
    tCardHeight();
    comingUpHeight();
    fullHeight();
  };
  animationHeighIni();

});
