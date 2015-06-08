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
   	
   	$('#button-clean').click(
   		function(){
   		  cleanTable();	
   		  showWarningMessage('You cleaned up all your registers!');
   		}	
   	);
   	
   	$('#button-test').click(function(){
   		
      var $search = $("#text-search"); 
      searchValue = $search.val();      
      var urlHistoricos = createUrl("http://localhost:8080/ProjectHistorico/services/getContent",searchValue);
                  
  	  $.getJSON( urlHistoricos, {
  	      tags: "mount rainier",
  	      tagmode: "any",
  	      format: "json"
  	    	  
  	    }).done(function( data ) {
           
  	        if(data==undefined){  	        
  	          showWarningMessage("The Register you are looking for is not here!!!");
  	      	  return;
  	         }
  	         
  	        cleanTable();
  	        
  	        
  	    	 $.each( data.historicos, function( i, historico ) {  
  	    		 
  	    		 var Reflector = function(obj) {
  	    			  this.getProperties = function() {
  	    			    var properties = [];
  	    			    for (var prop in obj) {
  	    			      if (typeof obj[prop] != 'function') {
  	    			        properties.push(prop);
  	    			      }
  	    			    }
  	    			    return properties;
  	    			  };
  	    		  }
  	    		 
  	    		var $tableOfContents = $("#table-content");   	    		
  	    		var newRowHeader = $("<tr>");
  	    		
  	    		var reflector = new Reflector(historico);  	    		
  	    		
  	    		if(i==0){
  	    			props = reflector.getProperties(); 
  	    			for( i=0; i<props.length; i++){  	  	    			
  	  	    		    newRowHeader.append("<td>"+props[i]);
  	  	    			//alert(eval("historico."+props[i]));
  	  	    		}  	  	    		
  	  	    	    $tableOfContents.append(newRowHeader);
  	  	    	}  	    		
  	    		
  	    		///var $tableOfContents = $("#table-content"); 
  	    		var newRow = $("<tr>");   	    		
  	    		var newInput = $("<input>");   	    		  	    		
  	    		var newCol = '';
  	    		
  	    		newCol += '<td>'+historico.Categoria+ '</td>';
  	    		newCol += '<td>'+historico.name+     '</td>';				
				newCol += '<td>'+historico.descricao+'</td>';
				newCol += '<td>'+'<button class="btn btn-primary btn-xs" id="button-remove" >Remove</button>'+'</td>';
				
				newRow.append(newCol);
  	    		$tableOfContents.append(newRow);
  	    		showSuccessMessage(" that's what you were running after!");
  	    		
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
 
 function cleanTable(){	 
	 var $rowsOfContents = $("#table-content tbody > tr"); 
     $rowsOfContents.remove();  	 
 }
 
 function showSuccessMessage(message){
	 
	 $div = $("#div-alert");   	 
     $div.html(message);     
   	 //$div.addClass("alert-success");	 
     $div.attr( "class", "alert alert-success" );
 }
 
 
function showWarningMessage(message){
	 
	 $div = $("#div-alert");   	 
     $div.html(message);     
   	 //$div.addClass("alert-warning");	
   	 $div.attr( "class", "alert alert-warning" );
 }

function showErrorMessage(message){
	
	 $div = $("#div-alert");   	 
     $div.html(message);     
  	 //$div.addClass("alert-danger");	 
  	 $div.attr( "class", "alert alert-danger" );
}

function showInfoMessage(message){
	 
	 $div = $("#div-alert");   	 
     $div.html(message);     
 	 //$div.addClass("alert-info");
     $div.attr( "class", "alert alert-info" ); 
}
 
 
 function onButtonShow(){
    $('#button-click').show();
 }
 

function teste(element){		
	alert("this is a "+element.value);
}





