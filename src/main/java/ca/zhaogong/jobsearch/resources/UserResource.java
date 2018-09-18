package ca.zhaogong.jobsearch.resources;


import ca.zhaogong.jobsearch.UserContext;
import ca.zhaogong.jobsearch.entities.User;
import ca.zhaogong.jobsearch.repositories.UserRepository;
import ca.zhaogong.jobsearch.utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Component
@Path("users")
@Produces("application/json")
public class UserResource {
    @Autowired
    private UserRepository userRepository;

    @GET
    public Object getAllUsers() {
        return userRepository.findAll();
    }

    @POST
    @Path("register")
    public User RegisterUser(User user){
        user.setSalt(PasswordUtils.generateSalt());
        user.setPassword(PasswordUtils.hashPassword(user.getPassword(), user.getSalt()));

        User newUser = userRepository.save(user);
        return newUser;
    }

    @GET
    @Path("current")
    public User getCurrentUser() {
        return userRepository.findById(UserContext.getCurrentUser().getId()).get();
    }
}
