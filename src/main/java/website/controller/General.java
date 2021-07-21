package website.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import website.repository.repo;

@Controller
public class General {

    private repo Repo;

    @Autowired
    public General(repo pRepo) {
        Repo = pRepo;
    }

    @RequestMapping(path="/home")
    public ModelAndView home(){
        ModelAndView mav = new ModelAndView();
        mav.addObject("listOfNames", Repo.getData());
        mav.setViewName("home");
        return mav;
    }
}
