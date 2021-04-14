$(function() {
  

  //hide the story until after it's been madlibbed//

  $("#story").hide();
  $("#story2").hide();


  // hiding the "play again" button until a story has been generated//
  $("#play-btn").hide();
   
  //when the 'generate' button is clicked pull entered info and slot it into the story//
  
  var timesClicked = 0;
$("#btn-click").click(function(e) {
    
    timesClicked++;
  
      if (timesClicked%2==0) {

    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".verb").empty().append($("input.verb").val());
    $(".exclamation").empty().append($("input.exclamation").val());

    //show the story after it's been madlibbed//
    $("#story2").show();

    $(':input').val('');
    
    $("#questions").hide();
    
    $("#play-btn").show();
    

      }

      else{

        $(".person").empty().append($("input.person").val());
        $(".adjective").empty().append($("input.adjective").val());
        $(".noun").empty().append($("input.noun").val());
        $(".noun2").empty().append($("input.plural-noun").val());
        $(".insect").empty().append($("input.insect").val());
        $(".verb").empty().append($("input.verb").val());
        $(".exclamation").empty().append($("input.exclamation").val());
    
         //show the story after it's been madlibbed//
        $("#story").show();

        //clear the form//
    
        $(':input').val('');
          
    
        $("#questions").hide();
        
        $("#play-btn").show();


  }
  
   
  $("#play-btn").click(function(e) {
   
    $("#questions").show();
    $("#story").hide();
    $("#story2").hide();
    

    //showing the play again button only from the finished madlib screen//
    $("#play-btn").hide();
    
  });

  
});

});