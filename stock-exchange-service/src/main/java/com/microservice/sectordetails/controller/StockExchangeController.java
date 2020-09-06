package com.microservice.sectordetails.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.sectordetails.dto.CompanyDto;
import com.microservice.sectordetails.dto.StockExchangeDto;
import com.microservice.sectordetails.service.StockExchangeService;

@RestController
public class StockExchangeController {

	@Autowired
	private StockExchangeService stockExchangeService;
	
	@GetMapping("/stock-exchange")
	public List<StockExchangeDto> getAllStocExchange(){
		return stockExchangeService.findAllStockExchange();
	}
	
	@PostMapping("/addStockExchange")
	public StockExchangeDto addStockExchange(@RequestBody StockExchangeDto dto) throws Exception {
		return stockExchangeService.addStockExchange(dto);
	}
	
	@GetMapping("/stockExchange/{name}/all-company")
	public List<CompanyDto> findAllCompanyInStockExchange(@PathVariable("name") String name){
		return stockExchangeService.findAllCompanyInStockExchange(name);
	}
}
