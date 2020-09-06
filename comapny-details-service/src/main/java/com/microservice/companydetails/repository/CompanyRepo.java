package com.microservice.companydetails.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.microservice.companydetails.model.Company;

@Repository
public interface CompanyRepo extends JpaRepository<Company, Integer>{
	public Company findByCompanyName(String companyName);
	
	public List<Company> findByCompanyNameStartsWith(String pattern);
}
