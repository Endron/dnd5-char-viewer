package charViewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@SpringBootApplication
@Controller
public class ApplicationStarter {

    public static void main(final String... args) {
        SpringApplication.run(ApplicationStarter.class, args);
    }
}
