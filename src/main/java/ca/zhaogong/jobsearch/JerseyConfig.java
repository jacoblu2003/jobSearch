package ca.zhaogong.jobsearch;

import ca.zhaogong.jobsearch.resources.UserResource;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath("api")
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
//        register(JacksonFeature.class);
        register(UserResource.class);
    }
}
