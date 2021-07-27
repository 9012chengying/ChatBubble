package website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class landingPageController {
    //route for landing page
    @RequestMapping(path="/landingPage")
    public ModelAndView landingPage(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("landingPage");
        return mav;
    }
    //set redirect to landing page if user doesn't enter a specific route
    @RequestMapping(path = "/" , method= RequestMethod.GET)
    public String getHomepage() {
        return "redirect:/landingPage";
    }
}
