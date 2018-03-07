// instanciate new modal
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['custom-class-1', 'custom-class-2'],
  onOpen: function() {
      console.log('modal open');
  },
  onClose: function() {
      console.log('modal closed');
  },
  beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
    return false; // nothing happens
  }
});


// MODAL


$(".contactButton").click(function(){
  modal.open();
  modal.setContent($(".modalcontent").html())			
});


// NAV SCROLL


$(".portNav").click(function() {
    $('html, body').animate({
      scrollTop: $(".pricingWrapper").offset().top
  }, 1500);
})



$("#firstNav").click(function() {
      $('html, body').animate({
        scrollTop: $("#missionDiv").offset().top
    }, 1500);    
})



//CASE STUDY



$("#caseSecondNav").click(function() {
  $('html, body').animate({
    scrollTop: $(".pricingWrapper").offset().top
}, 1500);
})


$("#caseFirstNav").click(function() {
    $('html, body').animate({
      scrollTop: $("#missionDiv").offset().top
  }, 1500);    
})

$("#thirdNav").click(function() {
  $('html, body').animate({
    scrollTop: $("#betaDiv").offset().top
}, 1500);    
})

$("#fourthNav").click(function() {
  $('html, body').animate({
    scrollTop: $("#finalDiv").offset().top  
}, 1500);    
})




















// $(aboutModal).hover(function(){
// 	if($(this).find(fuckingThing).css('display') == 'flex'){
//     	$(this).find(fuckingThing).css("display", "none");
// 	}
// 	else
// 		$(this).find(fuckingThing).css("display", "flex");
// });


// $(wtfuModal).hover(function(){
// 	if($(this).find(damnFuckingThing).css('display') == 'block'){
//     	$(this).find(damnFuckingThing).css("display", "none");
// 	}
// 	else
// 		$(this).find(damnFuckingThing).css("display", "block");
// });

