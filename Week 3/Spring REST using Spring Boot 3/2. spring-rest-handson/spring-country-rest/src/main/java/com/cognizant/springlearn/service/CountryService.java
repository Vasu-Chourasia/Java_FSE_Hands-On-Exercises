package com.cognizant.springlearn.service;

import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.util.CountryUtil;

@Service
public class CountryService {

    public Country getCountry(String code) {

        return CountryUtil.getCountryList()
                .getCountryList()
                .stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}