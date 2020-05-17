package com.daumsoft.test.controller;

import org.springframework.stereotype.Controller;

@Controller
public class MainController {
    public String start() {
        return "index";
    }
}