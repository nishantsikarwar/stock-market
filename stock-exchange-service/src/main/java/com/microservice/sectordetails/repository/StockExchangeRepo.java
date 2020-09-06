package com.microservice.sectordetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.sectordetails.model.StockExchange;

@Repository
public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer>{

	public StockExchange findByStockExchangeName(String stockExchangeName);
}
