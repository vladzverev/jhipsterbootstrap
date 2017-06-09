package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.*;
import com.mycompany.myapp.service.dto.AnnouncementDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Announcement and its DTO AnnouncementDTO.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class, })
public interface AnnouncementMapper extends EntityMapper <AnnouncementDTO, Announcement> {
    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.login", target = "userLogin")
    AnnouncementDTO toDto(Announcement announcement); 
    @Mapping(target = "images", ignore = true)
    @Mapping(source = "userId", target = "user")
    Announcement toEntity(AnnouncementDTO announcementDTO); 
    /**
     * generating the fromId for all mappers if the databaseType is sql, as the class has relationship to it might need it, instead of
     * creating a new attribute to know if the entity has any relationship from some other entity
     *
     * @param id id of the entity
     * @return the entity instance
     */
     
    default Announcement fromId(Long id) {
        if (id == null) {
            return null;
        }
        Announcement announcement = new Announcement();
        announcement.setId(id);
        return announcement;
    }
}
