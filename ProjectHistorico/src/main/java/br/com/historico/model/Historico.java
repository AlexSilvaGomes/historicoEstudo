package br.com.historico.model;

import java.util.ArrayList;
import java.util.Collection;

import javax.xml.bind.annotation.XmlTransient;

/**
 * @author Alex
 *
 */
public class Historico {

	private String category;
	private String name;
	private String descricao;
	private Collection<Historico> historicos;

	private Historico(Builder builder) {
		this.category = builder.category;
		this.name = builder.name;
		this.descricao = builder.descricao;
	}
	
	public Historico(){
		
	}
	
	public Historico(Collection<Historico> historicos){
		this.historicos = historicos;	
	}

	public static class Builder {
		private String category;
		private final String name;
		private String descricao;

		public Builder(String name) {
			this.name = name;
		}

		public Builder category(String category) {
			this.category = category;
			return this;
		}

		public Builder descricao(String descricao) {
			this.descricao = descricao;
			return this;
		}

		// Return the finally consrcuted User object
		public Historico build() {
			Historico hist = new Historico(this);
			validateUserObject(hist);
			return hist;
		}

		private void validateUserObject(Historico hist) {
			// Do some basic validations to check
			// if user object does not break any assumption of system
		}

	}
	
	public String toString(){
		
		StringBuilder hist = new StringBuilder();
		hist.append("Historico: ");
		hist.append(System.getProperty("line.separator"));
		hist.append(this.name);
		hist.append(System.getProperty("line.separator"));
		hist.append(this.category);
		hist.append(System.getProperty("line.separator"));
		hist.append(this.descricao);
		return hist.toString();
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getCategory() {
		return category;
	}

	public String getName() {
		return name;
	}

	public String getDescricao() {
		return descricao;
	}

	@XmlTransient
	public Collection<Historico> getHistoricos() {
		return historicos;
	}

	public void setHistoricos(Collection<Historico> historicos) {
		this.historicos = historicos;
	}

}
