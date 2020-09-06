package com.microservice.companydetails.service;

import java.time.LocalDate;
import java.util.List;
import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.microservice.companydetails.dto.StockPriceDto;
import com.microservice.companydetails.model.StockPrice;
import com.microservice.companydetails.repository.StockPriceRepo;

@Service
public class StockPriceService {

	@Autowired
	private StockPriceRepo repo;
	

	public StockPriceService(StockPriceRepo repo) {
		this.repo = repo;
	}
	
	public List<StockPriceDto> findStockPriceDetails(int companyId, LocalDate startDate, LocalDate endDate){
		List<StockPrice> listStockPrice = repo.findStockPriceDetails(companyId, startDate, endDate);
//		for(StockPrice stockPrice : listStockPrice) {
//			System.out.println(stockPrice);
//		}
		List<StockPriceDto> listDto = new ArrayList<StockPriceDto>();
		
		for(StockPrice stockPrice : listStockPrice) {
			StockPriceDto dto = customMapper(stockPrice);
			listDto.add(dto);
		}
		return listDto;
	}
	
	private StockPriceDto customMapper(StockPrice stockPrice) {
		StockPriceDto dto = new StockPriceDto();
		dto.setId(stockPrice.getId());
		dto.setCompanyId(stockPrice.getCompany().getId());
		dto.setStockExchange(stockPrice.getStockExchange());
		dto.setCurrentPrice(stockPrice.getCurrentPrice());
		dto.setDate(stockPrice.getDate());
		dto.setTime(stockPrice.getTime());
		return dto;
	}
}
