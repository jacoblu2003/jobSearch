package ca.zhaogong.jobsearch.resources;

import ca.zhaogong.jobsearch.UserContext;
import ca.zhaogong.jobsearch.entities.User;
import ca.zhaogong.jobsearch.repositories.UserRepository;
import ca.zhaogong.jobsearch.utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.Optional;

@Component
@Path("auth")
@Produces("application/json")
public class AuthResource {
    @Autowired
    private UserRepository userRepository;

    @POST
    @Path("login")
    public String login(User user) {
        Optional<User> foundUser = userRepository.findAll().stream()
                .filter(u -> u.getUsername().equals(user.getUsername())).findAny();
        boolean passwordMatches = foundUser.isPresent() &&
                foundUser.get().getPassword().equals(
                        PasswordUtils.hashPassword(user.getPassword(), foundUser.get().getSalt()));

        UserContext.invalidateSession();
        return passwordMatches ? UserContext.createSession(foundUser.get()) : null;
    }

    @POST
    @Path("logout")
    public void logout() {
        UserContext.invalidateSession();
    }
}
