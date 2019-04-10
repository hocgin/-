package in.hocg.activiti;

import org.activiti.spring.boot.SecurityAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.script.ScriptException;

/**
 * @author hocgin
 */
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ActivitiApplication {
    
    public static void main(String[] args) throws ScriptException {
//        ScriptEngineManager scriptEngine = new ScriptEngineManager();
//        ScriptEngine javascript = scriptEngine.getEngineByName("javascript");
//        javascript.eval("");
        SpringApplication.run(ActivitiApplication.class, args);
    }
    
}
