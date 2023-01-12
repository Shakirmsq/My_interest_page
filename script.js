// document.getElementsByTagName("h1")[0].style.fontSize = "2vw";

//Creating a button and calling JS function on the onclick event

// function dochange() {

//     alert('Clicked Button');
// }


// my practise button

// function nestedButton() {
//     // alert('hello bro !');   

//     // This line returns output ok or cancell externally, it is not used along side of Conditional Statements, only used inside of them.
//     // confirm('hi bro !');

//     // return on basis of button click in alert box( ok, cancel).
//     // this condition is applied on second nested alert box, if confirm method is called earlier.
//     if (confirm("Press any button to proceed")) {
//         alert('OK PRESSED !!');
//     } else {
//         alert('Are you sure to cancel !!');
//     }
// }











// function changecolor() {
//     var dd1 =
//         document.getElementById("d1");
//     var dd2 =
//         document.getElementById("d2");

//     dd1.className = "blueback";
//     dd2.className = "yellowback";
// }

function changetext() {
    var dd1 =
        document.getElementById("d1");

    var dd2 =
        document.getElementById("d2");

    dd1.innerHTML = "Mi nombre es Mohammed Shakir, desarrollador de software asociado.";
    dd2.innerHTML = "Développeur angulaire innovant avec une expérience complète dans les domaines de l'interface utilisateur / UX et de la conception, du développement frontal avec la volonté d'apprendre et maîtriser MongoDB et Express.js parallèlement à la programmation réactive. Expérience de niveau débutant en authentification, Bootstrap, jQuery, SASS, Node.js, Typescript et AngularJS.";
}

function resetTxt() {

    var txt1 = document.getElementById("d1");
    var txt2 = document.getElementById("d2");
    txt1.innerHTML = "My Name is Mohammed Shakir, Associate Software Developer.";
    txt2.innerHTML = "Innovative Angular Developer with comprehensive experience in UI/UX & Design, Front-end Development areas with willingness to learn and master MongoDB and Express.js alongside reactive programming. Beginner level experience in Authentication, Bootstrap, jQuery, SASS, Node.js, Typescript and AngularJS.";

}