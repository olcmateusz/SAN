package com.olcmat.onlinevotes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.MimeMappings;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class OnlinevotesApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlinevotesApplication.class, args);
    }

    @Component
    public class ServletCustomizer implements WebServerFactoryCustomizer<TomcatServletWebServerFactory> {
        @Override
        public void customize(TomcatServletWebServerFactory factory) {
            MimeMappings mappings = new MimeMappings(MimeMappings.DEFAULT);
            mappings.add("webm", "video/webm");
            mappings.add("mp4", "video/mp4");
            factory.setMimeMappings(mappings);
        }
    }
}
