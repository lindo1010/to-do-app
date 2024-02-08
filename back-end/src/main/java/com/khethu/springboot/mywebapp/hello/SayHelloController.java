package com.khethu.springboot.mywebapp.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class SayHelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello!!!!!!!!!!";
    }

    @GetMapping("/hello-bean")
    public HelloWorldBean sayHelloBean() {
        return new HelloWorldBean("Hello Bean!!!!!!!!!!");
    }

    @GetMapping("/hello-world/{name}")
    public HelloWorldBean sayHelloPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
