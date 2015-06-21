/**
 * 
 */

/******************************************************************
 * Fun��o que ser� executada quando o conte�do html for carregado 
 * ****************************************************************
 * */
 $(function(){	
   	   	
	$("#show-modal").click(function(){
		alert('HERE1');
		$('#input-dialog').modal()
	});
		 
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
   	
   	$('#button-remove').click(
   	   function(){
   		alert('here'+this);
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
  	        var props;
  	        
  	        
  	    	 $.each( data.historicos, function( i, historico ) {
  	    		 
  	    		var $tableOfContents = $("#table-content");   
  	    		var $tableOfContentsHead = $("#table-content thead");   	  
  	    		var newRowHeader = $("<tr>");
  	    		newRowHeader.addClass("info");  	    		 	    		
  	    		
  	    		//Create the reflector object to found out the attributes that belong to the object
  	    		var reflector = new Reflector(historico);  	   		
  	    		
  	    		/*
  	    		 *Include the header as a pattern of any table
  	    		 */
  	    		if(i==0){
  	    			props = reflector.getProperties(); 
  	    			for( i=0; i<props.length; i++){  	    				
  	  	    		    newRowHeader.append("<th><b>"+props[i]+"</b></th>"); 
  	  	    		}    	    			
  	    			newRowHeader.append("<th>Actions</th>");
  	    			$tableOfContentsHead.append(newRowHeader);
  	  	    	} 
  	    		
  	    		/*
  	    		 *Include the table's body based on attributes found in the json object
  	    		 */
  	    		var newRow = $("<tr>");
  	    		newRow.addClass("table-row");  	    		
  	    		newRow.attr("id","teste");
  	    		var newCol = '';
  	    		
  	    		for( i=0; i<props.length; i++){  	    			
  	    			newCol += '<td>'+eval('historico.'+props[i]) +'</td>';   	    			
  	    		}  	    		
				newCol += '<td>'+'<button class="btn btn-primary btn-xs" id="button-remove" onClick="return removeItem(this)" >Remove</button>'+'</td>';				
				newRow.append(newCol);
  	    		$tableOfContents.append(newRow);
  	    		showSuccessMessage(" that's what you were running after!");
  	    		
  	  	        });
  	      }); 
  	    
  }); //Close button-test      	
 }); //Close main function 
 
 

/**
 *  Will find all the properties into the object using typeof
 *  @returns array: properties
 */
Reflector = function(obj) {
	this.getProperties = function() {
		var properties = [];
		for ( var prop in obj) {
			if (typeof obj[prop] != 'function') {
				properties.push(prop);
			}
		}
		return properties;
	};
}


function removeItem(obj){	
		
	var $row = $(obj).parents('.table-row');
	var id =$row.attr('id');	
	$row.hide('slow', function(){
		       $row.remove();
		       showSuccessMessage("Task completed, the row's id:"+id+" was eliminated!!");
			});		
}
    
 /**
	 * Função para concatenar a url com o parâmetro que será enviado
	 * 
	 * @param url
	 * @param parameter
	 * @returns
	 */
function createUrl(url,parameter){ 
	 if(parameter!=null || parameter!=""){
		 url=url.concat("/",parameter);
     }	 
	 return url;
 } 


 /**
 * this function has the purpose to clean table contents however 
 * just information into the tbody scope
 */
function cleanTable(){		 
	 var $bodyRowsOfContents = $("#table-content tbody > tr"); //get just children of tbody 
	 var $headRowsOfContents = $("#table-content thead > tr"); //get just children of thead 
	 $headRowsOfContents.remove();  	
	 $bodyRowsOfContents.remove();
 }
 

 /**
 * Show messages with success css
 * @param message
 */
function showSuccessMessage(message){
	 
	 $div = $("#div-alert");   	 
     $div.html(message);     
   	 //$div.addClass("alert-success");	 
     $div.attr( "class", "alert alert-success" );
 }
 
 
/** Show messages with warning css
 * @param message
 */
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





