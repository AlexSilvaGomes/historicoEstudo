package br.com.historico.services;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.ws.rs.core.Application;

//import org.glassfish.jersey.jettison.JettisonFeature;

public class ApplicationJAXRS extends Application {	
	
    // Mapeia todas as classes que deveram ser mapeadas pale servlet do jersey 
	@Override
	public Set<Class<?>> getClasses() {
	Set<Class<?>> classes = new HashSet();
	classes.add(HelloWorldREST.class);
	classes.add(TesteService.class);	
	return classes;
	}
	
	
	//Mapeia todos os pacotes que deveram ser enxergados pela servlet do jersey
	public Map<String, Object> getProperties() {
	Map<String, Object> properties = new HashMap<String, Object>();
	properties.put("jersey.config.server.provider.packages", "br.com.historico.services");
	return properties;
	}
	
	
	@Override
	public Set<Object> getSingletons() {
	Set<Object> singletons = new HashSet<Object>();
	//org.glassfish.jersey.jettison.JettisonFeature
	//singletons.add(new JettisonFeature());
	return singletons;
	}
}
