package com.microservice.companydetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.companydetails.model.StockExchange;

@Repository
public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer>{

	public StockExchange findByStockExchangeName(String name);
}
