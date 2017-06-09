package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Announcement.
 */
@Entity
@Table(name = "announcement")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Announcement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @NotNull
    @Size(max = 2000)
    @Column(name = "text", length = 2000, nullable = false)
    private String text;

    @NotNull
//    @Size(min = 10, max = 10)
    @Pattern(regexp = "[0-9]")
    @Column(name = "phone", length = 10, nullable = false)
    private String phone;

    @OneToMany(mappedBy = "announcement")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Image> images = new HashSet<>();

    @ManyToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Announcement title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public Announcement text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPhone() {
        return phone;
    }

    public Announcement phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Set<Image> getImages() {
        return images;
    }

    public Announcement images(Set<Image> images) {
        this.images = images;
        return this;
    }

    public Announcement addImage(Image image) {
        this.images.add(image);
        image.setAnnouncement(this);
        return this;
    }

    public Announcement removeImage(Image image) {
        this.images.remove(image);
        image.setAnnouncement(null);
        return this;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }

    public User getUser() {
        return user;
    }

    public Announcement user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Announcement announcement = (Announcement) o;
        if (announcement.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), announcement.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Announcement{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", text='" + getText() + "'" +
            ", phone='" + getPhone() + "'" +
            "}";
    }
}
