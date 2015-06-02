package br.com.historico.services.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlElement;

import br.com.historico.model.Historico;

@XmlRootElement
public class Historicos {

	private List<Historico> historicos = new ArrayList<Historico>();

	public Historicos(List<Historico> historicos) {
		this.historicos = historicos;
	}

	public Historicos() {
	}

	@XmlElement(name = "historico")
	public List<Historico> getHistoricos() {
		return historicos;
	}

	public void setCervejas(List<Historico> historicos) {
		this.historicos = historicos;
	}

}