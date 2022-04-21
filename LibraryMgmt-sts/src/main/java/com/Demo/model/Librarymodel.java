package com.Demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Librarymodel                    // model class for libraryMgmt
{

	@Id
	private int id;
	private String name;
	private double price;
	private String status;
	
	public Librarymodel()
	{}
	public Librarymodel(int id, String name, double price, String status)
	{
		this.id=id; this.name=name; this.price=price; this.status=status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	}
	
	
	

