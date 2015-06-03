/**
 * 
 */

/******************************************************************
 * Fun��o que ser� executada quando o conte�do html for carregado 
 * ****************************************************************
 * */
 $(function(){
	
   	   	
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
   	  
      var $search = $("#text-search"); 
      searchValue = $search.val();      
      var urlHistoricos = createUrl("http://localhost:8080/ProjectHistorico/services/getContent",searchValue);
                  
  	  $.getJSON( urlHistoricos, {
  	      tags: "mount rainier",
  	      tagmode: "any",
  	      format: "json"
  	    }).done(function( data ) {
  	    	  
  	    	 $.each( data.historicos, function( i, historico ) {
  	  	       
  	    		var $tableOfContents = $("#table-content");  	    		
  	    		
  	    		var newRow = $("<tr>");  	    		
  	    		var newCol = '';
  	    		newCol += '<td>'+historico.category+ '</td>';
  	    		newCol += '<td>'+historico.name+     '</td>';				
				newCol += '<td>'+historico.descricao+'</td>';	
				
				newRow.append(newCol);
  	    		$tableOfContents.append(newRow);
  	    		
  	  	        });
  	      });   
  	
  	    
  	    
  }); //Close button-test    
   	
 }); //Close main function 
     
 function createUrl(url,parameter){
	 
	 if(parameter!=null || parameter!=""){
		 url=url.concat("/",parameter);
     }	 
	 return url;
 }
 
 function onButtonShow(){
    $('#button-click').show();
 }
 

function teste(element){		
	alert("this is a "+element.value);
}





