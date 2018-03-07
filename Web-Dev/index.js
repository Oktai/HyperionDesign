document.getElementById("copy-year").innerText = new Date().getFullYear().toString();

$("#nav-portfolio").click(function(){
    $('html, body').stop().animate({
        scrollTop:  $("#portfolio").offset().top
    }, 1000);
});

$("#nav-about").click(function(){
    $('html, body').stop().animate({
        scrollTop:  $("#about").offset().top
    }, 1000);
});

$("#nav-contact").click(function(){
    $('html, body').stop().animate({
        scrollTop:  $("#contact").offset().top
    }, 1000);
});

$("#btn-contact").click(function(){
    $('html, body').stop().animate({
        scrollTop:  $("#contact").offset().top
    }, 1000);
});

$("#btn-hd-visit-site").click(function(){
    window.open("http://hdknowledge.co.uk");
});

$("#btn-hd-case-study").click(function(){
    window.location.href = window.location.origin + "/HDKnowledge.html";
});