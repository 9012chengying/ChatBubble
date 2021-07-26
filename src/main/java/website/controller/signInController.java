package website.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class signInController {
    @RequestMapping("/")
    public ModelAndView signIn(){
        ModelAndView si = new ModelAndView();
        si.setViewName("signIn");
        return si;
    }
}
