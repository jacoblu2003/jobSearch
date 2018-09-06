package ca.zhaogong.jobsearch.repositories;

import ca.zhaogong.jobsearch.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

}
