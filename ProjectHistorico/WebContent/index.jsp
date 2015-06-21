<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<link type='text/css' href='css/historico.css' rel='stylesheet'>

<link href="css/bootstrap.css" rel="stylesheet">

 <script src="js/bootstrap.js"></script>

<script src='js/jquery-1.11.2.min.js' type='text/javascript'></script>

<script src='js/jquery.serializejson.min.js' type='text/javascript'></script>

<script src='js/historico.js' type='text/javascript'></script>



<title>Remember Everything useful!</title>
</head>

<body>
	<!-- HEADER -->
	<header   class="container-fluid"   >
	<div class="row-fluid well" style="margin-bottom: 2px;background-color: white;" >
		<div class="span12">			
			<div class="container">
				<h4 align="center">Remember Everything</h4>
			</div>
		</div>
	</div>
	</header>
	<!-- / HEADER -->
	<!-- CLASSE QUE DEFINE O CONTAINER COMO FLUIDO (100%) -->
	<div  class="container-fluid">
		<!-- CLASSE PARA DEFINIR UMA LINHA -->
		<div class="row-fluid">
			<!-- COLUNA OCUPANDO 2 ESPAÇOS NO GRID -->
			<!-- <div class="span2">
				<h2>Menu</h2>
				<ul class="nav nav-tabs nav-stacked">
					<li><a href="#"> <i class="icon-star"></i>Partner</a></li>
					<li class="active"><a href="#"> <i class="icon-star"></i>About</a></li>
					<li><a href="#"> <i class="icon-star"></i>Home
				</ul>
			</div> -->
			<!-- COLUNA OCUPANDO 10 ESPAÇOS NO GRID -->
			<div class="span10">
				<div class="well">
					<h2>History</h2>
					<hr />

					<div class="form-group">
						<input name="text-search" type="text" class="form-control" id="text-search"
							placeholder="Tap a thing" required data-validation-required-message="Please enter your name.">
						<p class="help-block text-danger"></p>
					</div>


					<input id="button-test" class="btn btn-primary" type="button" value="Get Content" draggable="true" />					
					
					<hr/>
					<div id="div-alert" class="alert alert-info" role="alert">Nothing to show yet..</div>
					
					<table id="table-content"  class="table table-striped table-hover">					   
					    
					     <thead  >					       
						 </thead>				    
					    
						<tbody  style="border: 1px"  >				   
							
						</tbody>
					</table>
					
					<button class="btn btn-primary btn-small"  data-toggle="modal" data-target="#input-dialog" >New</button>
					<button id="show-modal" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#input-dialog">Open Modal</button>
					<button class="btn btn-primary btn-small" id="button-clean" >Clean</button>
					
					
				</div>
				
			 <div id="input-dialog" class="modal fade">
					
                  <div class="modal-content">
                  
                     <div class="modal-header">
                        <h2>Add Resource</h2>
                     </div>
                     <div class="modal-body">
						
						<label>Nome</label>
						<input name="text-nome" type="text" class="form-control"   id="text-nome" >
						</br>
												
						<label>Assunto</label>
						<input name="text-assunto" type="text" class="form-control"   id="text-assunto" >						
						</br>
						
						<label>Descrição</label>
						<input name="text-desc" type="text" class="form-control"   id="text-desc" >											
					
					</div>
					<div class="modal-footer">
					   footer..
					
					</div>
                  
                  </div>
					<input id="button-test" class="btn btn-primary" type="button" value="Get Content" draggable="true" />					
															
					<button class="btn btn-primary btn-small">Add</button>
				</div>
				
				
								  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
				
			</div>			
		</div>
	</div>
</body>


</html>