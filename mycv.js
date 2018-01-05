var selection = document.getElementById("cont1");
var cont1 = selection.id;
var phone = document.getElementById("Phone");
var email = document.getElementById("email");
var question = document.getElementById("question");
var senda = document.getElementById("send");
var showing = document.getElementById("mynumber");


        
$(document).ready(function(){
    $("#li1").click(function(){
        if (cont1 != "cont1"){
          $(selection).fadeOut();
          $("#cont1").fadeIn();
           selection = document.getElementById("cont1");
           cont1 = selection.id;
       }
    });
    $("#li2").click(function(){
        if (cont1 != "cont2"){
        $(selection).fadeOut();
        $("#cont2").fadeIn();
        selection = document.getElementById("cont2");
        cont1 = selection.id;
    }
    });
    $("#li3").click(function(){
        if (cont1 != "cont3"){
        $(selection).fadeOut();
        $("#cont3").fadeIn();
        selection = document.getElementById("cont3");
        cont1 = selection.id;
    }
    });
    $("#li4").click(function(){
        if (cont1 != "cont4"){
        $(selection).fadeOut();
        $("#cont4").fadeIn();
        selection = document.getElementById("cont4");
        cont1 = selection.id;
    }
    });
    $("#li5").click(function(){
        if (cont1 != "cont5"){
        $(selection).fadeOut();
        $("#cont5").fadeIn();
        selection = document.getElementById("cont5");
        cont1 = selection.id;
    }
        
    });
    
    $("#send").click(function(){
        if (question.value == "" && email.value == ""){
            alert("Fill the Fields !");
        }
        else if (question.value == "" || email.value == ""){
            alert("Dont miss anything Empty !");
        }
        else{
            $(email).fadeOut();
            $(question).fadeOut();
            $(senda).fadeOut();
            $(pemail).fadeOut();
            $(pquestion).fadeOut();
            $("#Thank").fadeIn();
        }
    });
    
    $("#Phone").hover(function(){
      $("#mynumber").fadeToggle();  
    });
    });
    