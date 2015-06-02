/**
 * 
 */

/******************************************************************
 * Fun��o que ser� executada quando o conte�do html for carregado 
 * ****************************************************************
 * */
 $(function(){
	 
   	alert("Page Loaded!");  
   	//$('#button-click').hide();  
   	
   	jQuery('#button-click').hover(function(){
   		
   	}, function(){   		
   	});
   	
   	$('.div-painel').click(function(){
   		$('.div-painel').css("background-color","gray");
   	});
   	
    /*$('#button-click').click(function(){
   	 
    	  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    	    $.getJSON( flickerAPI, {
    	      tags: "mount rainier",
    	      tagmode: "any",
    	      format: "json"
    	    })
    	      .done(function( data ) {
    	    	  
    	    	  console.log('object data '+data);  
    	    	  
    	        $.each( data.items, function( i, item ) {
    	          $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
    	          if ( i === 6 ) {
    	            return false;
    	          }
    	        });
    	      });     	
    });
    */
   	
   	
   	$('#button-test').click(function(){
      	 
  	  var historicos = "http://localhost:8080/ProjectHistorico/services/getContent";
  	    $.getJSON( historicos, {
  	      tags: "mount rainier",
  	      tagmode: "any",
  	      format: "json"
  	    })
  	      .done(function( data ) {
  	    	  
  	    	  console.log('object data '+data);  
  	    	  
  	        $.each( data.items, function( i, item ) {
  	         /* $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
  	          if ( i === 6 ) {
  	            return false;
  	          }*/  	        	
  	        	
  	        alert(item.descricao);	
  	        	  	           	
  	        });
  	      });   
  	
  }); //Close button-test    
   	
 }); //Close main function 
     
 
 function onButtonShow(){
    $('#button-click').show();
 }
 

function teste(element){		
	alert("this is a "+element.value);
}





