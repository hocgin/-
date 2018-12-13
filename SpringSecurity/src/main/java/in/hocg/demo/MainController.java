package in.hocg.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
    @RequestMapping("/")
    public String root() {
        return "redirect:/index";
    }
    
    @GetMapping("/index")
    public String index() {
        return "index.html";
    }
}
