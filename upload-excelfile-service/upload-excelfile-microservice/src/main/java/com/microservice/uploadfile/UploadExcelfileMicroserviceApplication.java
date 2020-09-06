package com.microservice.uploadfile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class UploadExcelfileMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UploadExcelfileMicroserviceApplication.class, args);
	}

}
