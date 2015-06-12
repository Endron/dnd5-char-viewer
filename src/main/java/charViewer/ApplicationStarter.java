package charViewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

/**
 * Main class to bootstrap the Spring Context including the embedded webserver used to deliver the website.
 */
@SpringBootApplication
@Controller
public class ApplicationStarter {

    /**
     * Starts the application.
     *
     * @param args the commandline arguments used
     */
    public static void main(final String... args) {
        SpringApplication.run(ApplicationStarter.class, args);
    }
}
