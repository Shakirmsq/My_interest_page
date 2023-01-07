// document.getElementsByTagName("h1")[0].style.fontSize = "2vw";

//Creating a button and calling JS function on the onclick event

function dochange() {

    alert('Clicked Button');
}


function okcancell() {


    confirm('Choose on option');

    var ans = confirm('Choose on option');

    if (ans == true) {
        alert("YOU PRESSED ok");
    } else {
        var mes = "Are you sure you want to cancel?";
    }
}

function changecolor() {
    var dd1 =
        document.getElementById("d1");
    var dd2 =
        dochange.getElementById("d2");

    dd1.className = "blueback";
    dd2.className = "yellowback";
}

function changetext() {
    var dd1 =
        document.getElementById("d1");

    var dd2 =
        document.getElementById("d2");

    dd1.innerHTML = "Bonjour";
    dd2.innerHTML = "Sayonara";
}