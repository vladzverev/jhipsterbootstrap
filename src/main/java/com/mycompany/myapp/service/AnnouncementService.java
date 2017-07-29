package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Announcement;
import com.mycompany.myapp.domain.Image;
import com.mycompany.myapp.domain.User;
import com.mycompany.myapp.repository.AnnouncementRepository;
import com.mycompany.myapp.repository.ImageRepository;
import com.mycompany.myapp.repository.UserRepository;
import com.mycompany.myapp.service.dto.AnnouncementDTO;
import com.mycompany.myapp.service.mapper.AnnouncementMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing Announcement.
 */
@Service
@Transactional
public class AnnouncementService {

    private final Logger log = LoggerFactory.getLogger(AnnouncementService.class);

    private final AnnouncementRepository announcementRepository;

    private final ImageRepository imageRepository;

    private final AnnouncementMapper announcementMapper;

    private final UserRepository userRepository;

    public AnnouncementService(AnnouncementRepository announcementRepository,
                               AnnouncementMapper announcementMapper,
                               ImageRepository imageRepository,
                               UserRepository userRepository) {
        this.announcementRepository = announcementRepository;
        this.announcementMapper = announcementMapper;
        this.imageRepository = imageRepository;
        this.userRepository = userRepository;
    }

    /**
     * Save a announcement.
     *
     * @param announcementDTO the entity to save
     * @return the persisted entity
     */
    public AnnouncementDTO save(AnnouncementDTO announcementDTO) {
        log.debug("Request to save Announcement : {}", announcementDTO);
        Announcement announcement = announcementMapper.toEntity(announcementDTO);

        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        UserDetails springSecurityUser = (UserDetails) authentication.getPrincipal();
        log.debug("Request to save  : {}", springSecurityUser.getUsername());
        Optional<User> userFromDatabase = userRepository.findOneWithAuthoritiesByLogin("admin");
        log.debug("Request to save  : {}", userFromDatabase);
        userFromDatabase.ifPresent(user -> announcement.setUser(user));

        announcementDTO.getImageId().forEach(i -> {
            Image image = imageRepository.findOne(i);
            image.setAnnouncement(announcement);
            imageRepository.save(image);
        });
        log.debug("cghmghmghmgm");

        Announcement announcement2 = announcementRepository.save(announcement);
        AnnouncementDTO result = announcementMapper.toDto(announcement2);
        return result;
    }

    /**
     * Get all the announcements.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<AnnouncementDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Announcements");
        Page<Announcement> result = announcementRepository.findAll(pageable);
        return result.map(announcement -> announcementMapper.toDto(announcement));
    }

    /**
     * Get one announcement by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public AnnouncementDTO findOne(Long id) {
        log.debug("Request to get Announcement : {}", id);
        Announcement announcement = announcementRepository.findOne(id);
        AnnouncementDTO announcementDTO = announcementMapper.toDto(announcement);
        return announcementDTO;
    }

    /**
     * Delete the  announcement by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Announcement : {}", id);
        announcementRepository.delete(id);
    }
}
