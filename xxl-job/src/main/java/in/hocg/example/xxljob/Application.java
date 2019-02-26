package in.hocg.example.xxljob;

import in.hocg.example.xxljob.job.TestJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@EnableConfigurationProperties
@SpringBootApplication
@RestController
public class Application {
    @Autowired
    private TestJob testJob;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    
    @RequestMapping("worked")
    @ResponseBody
    public Boolean worked() {
        return Objects.isNull(testJob);
    }

}
