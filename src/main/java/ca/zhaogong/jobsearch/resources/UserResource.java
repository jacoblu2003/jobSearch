package ca.zhaogong.jobsearch.resources;


import ca.zhaogong.jobsearch.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Component
@Path("users")
@Produces("application/json")
public class UserResource {
    @Autowired
    private UserRepository userRepository;

    @GET
    public Object getUsers8() {
        int a  = 7;
        return userRepository.findAll();
    }
}
