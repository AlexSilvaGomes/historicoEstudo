package br.com.historico.services;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

@Path("/hello")
public class HelloWorldREST {

	@GET
	@Path("/{parameter}")	
	public Response responseMsg( @PathParam("parameter") String parameter,
			@DefaultValue("Nothing to say") @QueryParam("value") String value) {

		String output = "Hello from: " + parameter + " : " + value;
		return Response.status(200).entity(output).build();
	}
	
	
	@GET	
	public Response responseMsg(@DefaultValue("Nothing to say") @QueryParam("value") String value) {
		String output = "Nothing informed";
		return Response.status(200).entity(output).build();
	}
}