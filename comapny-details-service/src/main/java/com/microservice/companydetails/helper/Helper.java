package com.microservice.companydetails.helper;

import java.util.ArrayList;
import java.util.List;

import com.microservice.companydetails.dto.IpoDto;
import com.microservice.companydetails.model.IpoDetails;

public class Helper {

	public static List<IpoDto> IpoDetailsToDto(List<IpoDetails> ipoDetailsList, int companyId) {
		List<IpoDto> dtoList = new ArrayList<>();
		for(IpoDetails ipo : ipoDetailsList) {
			IpoDto dto = new IpoDto();
			dto.setId(ipo.getId());
			dto.setStockExchangeId(ipo.getStockExchangeId());
			dto.setPricePerShare(ipo.getPricePerShare());
			dto.setTotalShare(ipo.getTotalShares());
			dto.setCompanyId(companyId);
			dtoList.add(dto);
		}
		return dtoList;
	}
}
