package website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JdbcServerApplication {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(JdbcServerApplication.class, args);
    }

}
