package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Announcement;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the Announcement entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement,Long> {

    @Query("select announcement from Announcement announcement where announcement.user.login = ?#{principal.username}")
    List<Announcement> findByUserIsCurrentUser();

}
