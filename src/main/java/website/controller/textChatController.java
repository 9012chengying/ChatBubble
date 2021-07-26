package website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class textChatController {
    @RequestMapping("/textChat")
    public ModelAndView signIn(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("textChatRoom");
        return mav;
    }
}
