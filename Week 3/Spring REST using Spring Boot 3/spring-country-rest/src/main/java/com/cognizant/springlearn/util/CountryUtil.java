package com.cognizant.springlearn.util;

import java.io.InputStream;

import com.cognizant.springlearn.model.CountryList;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Unmarshaller;

public class CountryUtil {

    public static CountryList getCountryList() {

        try {

            JAXBContext context = JAXBContext.newInstance(CountryList.class);

            Unmarshaller unmarshaller = context.createUnmarshaller();

            InputStream input = CountryUtil.class.getClassLoader()
                    .getResourceAsStream("country.xml");

            return (CountryList) unmarshaller.unmarshal(input);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}