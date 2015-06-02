package br.com.historico.services;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import br.com.historico.model.Historico;
import br.com.historico.services.model.Historicos;

@Path("/getContent")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TesteService {

	@GET
	public Historicos getContent() {	
		
    Historico hist = new Historico.Builder("sentence").category("inglês").descricao("long time no see").build();    
    Historico hist2 = new Historico.Builder("sentence").category("inglês").descricao("I have nothing to do with this").build();   
		
    List<Historico> historicos = new ArrayList<Historico>();
    historicos.add(hist);
    historicos.add(hist2);
    
    Historicos listOfHistoricos = new Historicos(historicos);
    
    /*Gson object = new Gson();
    System.out.println(object.toJson(hist));
    */
	return listOfHistoricos;
	}
}
