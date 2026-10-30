package com.charan.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.charan.demo.model.ChatResponse;
import com.charan.demo.service.GeminiService;
import com.charan.demo.model.ChatRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://charan-gpt-two.vercel.app")
public class ChatController {


   
    private final GeminiService geminiService;

    public ChatController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @GetMapping("/hello")
    public String hello() {
        return "Welcome to CharanGPT!";
    }

    @PostMapping("/chat")
    public ChatResponse chat(@RequestBody ChatRequest request) {

        String aiResponse = geminiService.getAIResponse(
                request.getMessage()
        );

        ChatResponse response = new ChatResponse();

        response.setResponse(aiResponse);

        return response;
    }
}

  