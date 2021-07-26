package website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class landingPageController {
    @RequestMapping(path="/landingPage")
    public ModelAndView landingPage(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("landingPage");
        return mav;
    }
}
