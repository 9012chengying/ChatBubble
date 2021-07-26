package website.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import website.repository.repo;

@Controller
public class homeController {

    private repo Repo;

    @Autowired
    public homeController(repo pRepo) {
        Repo = pRepo;
    }

    @RequestMapping(path="/home")
    public ModelAndView home(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("home");
        return mav;
    }

}
