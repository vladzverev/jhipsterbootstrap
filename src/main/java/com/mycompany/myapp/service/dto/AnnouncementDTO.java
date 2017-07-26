package com.mycompany.myapp.service.dto;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Objects;
import java.util.Set;

/**
 * A DTO for the Announcement entity.
 */
public class AnnouncementDTO implements Serializable {

    private Long id;

    private String title;

    @NotNull
    @Size(max = 2000)
    private String text;

    @NotNull
    @Size(min = 10, max = 10)
    @Pattern(regexp = "[0-9]+")
    private String phone;

    private Long userId;

    private String userLogin;

    private Set<Long> imageId;

    public Set<Long> getImageId() {
        return imageId;
    }

    public void setImageId(Set<Long> imageId) {
        this.imageId = imageId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        AnnouncementDTO announcementDTO = (AnnouncementDTO) o;
        if(announcementDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), announcementDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "AnnouncementDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", text='" + getText() + "'" +
            ", phone='" + getPhone() + "'" +
            "}";
    }
}
