import {Component, OnInit, EventEmitter} from '@angular/core';

import {Announcement} from './../entities/announcement';
import {AnnouncementService} from './../entities/announcement';
import {ImageService} from './../entities/image';
import {Image} from './../entities/image';

@Component({
    selector: 'announcement',
    templateUrl: 'announcement.component.html',
})
export class AnnouncementComponent implements OnInit {
    //innerHeight: string;
    announcement: Announcement;
    image: Image;

    constructor(private announcementService: AnnouncementService,
                private imageService: ImageService) {
        //this.innerHeight = (window.screen.height) / 2 + 'px';
        this.announcement = new Announcement();
        this.image = new Image();
    }

    ngOnInit() {
    }

    save() {
        this.announcementService.create(this.announcement)
            .subscribe((res: Announcement) => {
                this.imageService.create();
                this.onSaveSuccess(res);
            }, (res: Response) => this.onSaveError(res.json()));
    }

    /*    onChange(event) {
     this.image.photo = event.srcElement.files;
     console.log(this.image.photo);
     /!*        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
     let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
     let files: FileList = target.files;
     this.file = files[0];
     console.log(this.file);*!/
     }*/

    private onSaveSuccess(result: Announcement) {
    }

    private onSaveError(error) {
    }
}
