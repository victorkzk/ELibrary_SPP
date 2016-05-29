package com.antonchernov.yetilibrary.configuration.cors;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by anton.charnou on 25.03.2016.
 */

@Component
@ConfigurationProperties(prefix="yeti.security")
public class CorsConfig {

    private List<String> urls = new ArrayList<String>();

    public List<String> getUrls() {
        return this.urls;
    }
}