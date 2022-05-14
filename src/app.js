/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const SNARE = document.getElementById("audiosnare");
  const TOM1 = document.getElementById("audiotom1");
  const TOM2 = document.getElementById("audiotom2");
  const TOM3 = document.getElementById("audiotom3");
  const KICK = document.getElementById("audiokick");
  const HIHAT = document.getElementById("audiohihat");
  const CRASH = document.getElementById("audiocrash");
  const RIDE = document.getElementById("audioride1");

  document.addEventListener("keydown", function(e) {
    if (e.keyCode == "67") {
      if (SNARE.paused) {
        SNARE.play();
      } else {
        SNARE.currentTime = 0;
      }

      document.getElementsByClassName("snare")[0].className = "snarehit";
    }

    if (e.keyCode == "70") {
      if (TOM1.paused) {
        TOM1.play();
      } else {
        TOM1.currentTime = 0;
      }

      document.getElementsByClassName("tom1")[0].className = "tom1hit";
    }

    if (e.keyCode == "71") {
      if (TOM2.paused) {
        TOM2.play();
      } else {
        TOM2.currentTime = 0;
      }
      document.getElementsByClassName("tom2")[0].className = "tom2hit";
    }

    if (e.keyCode == "66") {
      if (TOM3.paused) {
        TOM3.play();
      } else {
        TOM3.currentTime = 0;
      }
      document.getElementsByClassName("tom3")[0].className = "tom3hit";
    }

    if (e.keyCode == "78") {
      if (KICK.paused) {
        KICK.play();
      } else {
        KICK.currentTime = 0;
      }
      document.getElementsByClassName("kick")[0].className = "kickhit";
    }

    if (e.keyCode == "74") {
      if (HIHAT.paused) {
        HIHAT.play();
      } else {
        HIHAT.currentTime = 0;
      }
      document.getElementsByClassName("hihat")[0].className = "hihathit";
    }

    if (e.keyCode == "75") {
      if (CRASH.paused) {
        CRASH.play();
      } else {
        CRASH.currentTime = 0;
      }
      document.getElementsByClassName("crash")[0].className = "crashhit";
    }

    if (e.keyCode == "76") {
      if (RIDE.paused) {
        RIDE.play();
      } else {
        RIDE.currentTime = 0;
      }
      document.getElementsByClassName("ride")[0].className = "ridehit";
    }
  });

  document.addEventListener("keyup", function(e) {
    if (e.keyCode == "67") {
      document.getElementsByClassName("snarehit")[0].className = "snare";
    }
    if (e.keyCode == "70") {
      document.getElementsByClassName("tom1hit")[0].className = "tom1";
    }
    if (e.keyCode == "71") {
      document.getElementsByClassName("tom2hit")[0].className = "tom2";
    }
    if (e.keyCode == "66") {
      document.getElementsByClassName("tom3hit")[0].className = "tom3";
    }
    if (e.keyCode == "78") {
      document.getElementsByClassName("kickhit")[0].className = "kick";
    }
    if (e.keyCode == "74") {
      document.getElementsByClassName("hihathit")[0].className = "hihat";
    }
    if (e.keyCode == "75") {
      document.getElementsByClassName("crashhit")[0].className = "crash";
    }
    if (e.keyCode == "76") {
      document.getElementsByClassName("ridehit")[0].className = "ride";
    }
  });
};
