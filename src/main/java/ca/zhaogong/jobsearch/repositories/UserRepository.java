package ca.zhaogong.jobsearch.repositories;

import ca.zhaogong.jobsearch.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
