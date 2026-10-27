
package com.charan.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;

import java.util.HashMap;
import java.util.Map;

@Service
public class GeminiService {
 private final RestTemplate restTemplate;
  private final String apiKey;
public GeminiService(
        RestTemplate restTemplate,
        @Value("${gemini.api.key}") String apiKey) {

    this.restTemplate = restTemplate;
    this.apiKey = apiKey;
}
public String getAIResponse(String message) {

    String url =
            "https://generativelanguage.googleapis.com/v1beta/interactions";

    HttpHeaders headers = new HttpHeaders();

    headers.setContentType(MediaType.APPLICATION_JSON);

    headers.set("x-goog-api-key", apiKey);

    Map<String, Object> body = new HashMap<>();

    body.put("model", "gemini-3.6-flash");
    body.put("input", message);

    HttpEntity<Map<String, Object>> entity =
            new HttpEntity<>(body, headers);

    Map response = restTemplate.postForObject(
            url,
            entity,
            Map.class
    );

    
    Map<String, Object> step =
        (Map<String, Object>) ((java.util.List<?>) response.get("steps")).get(1);

java.util.List<Map<String, Object>> content =
        (java.util.List<Map<String, Object>>) step.get("content");

Map<String, Object> firstContent = content.get(0);

return firstContent.get("text").toString();
}
}