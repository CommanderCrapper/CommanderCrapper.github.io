var head = document.getElementById("title")
var div = document.getElementById("buttons")
var hiddenText = document.getElementById("wrong")

function selectYes() {
    if(hiddenText.style.display === "block") {
        hiddenText.style.display = "none";
        //adding the "else" part here so if smth gets fucked up it'll still work (hopefully)
    } else {
        hiddenText.style.display = "none";
    }
    document.getElementById("title").innerHTML = "Yay!!!! I love you so much! Happy valentine's day!"
}

function selectNo() {
    if(hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none"
    }
    document.getElementById("title").innerHTML = "Try again, will you be my valentine?"
}

/* <button onclick="myFunction()">Click Me</button>

<div id="myDIV">
  This is my DIV element.
</div> */

/* function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */