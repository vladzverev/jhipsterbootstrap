import {Component, OnInit, EventEmitter} from '@angular/core';

import {Announcement} from './../entities/announcement';
import {AnnouncementService} from './../entities/announcement';
import {ImageService} from './../entities/image';
import {Image} from './../entities/image';
import {FileUploader, FileItem} from 'ng2-file-upload';

@Component({
    selector: 'announcement',
    templateUrl: 'announcement.component.html',
})
export class AnnouncementComponent implements OnInit {
    //innerHeight: string;
    announcement: Announcement;
    image: Image;
    uploader: FileUploader;
    private resourceUrl;

    constructor(private announcementService: AnnouncementService,
                private imageService: ImageService) {
        //this.innerHeight = (window.screen.height) / 2 + 'px';
        this.announcement = new Announcement();
        this.image = new Image();
        this.resourceUrl = 'api/images';
        this.uploader = new FileUploader({url: this.resourceUrl});
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        };
    }

    ngOnInit() {
    }

    fileChangeEvent() {
        this.imageService.create(this.uploader);
    }

    removeImage(item: FileItem) {
        // console.log(JSON.parse(item._xhr.response).id);
        item.remove();
        this.imageService.delete(JSON.parse(item._xhr.response).id)
            .subscribe(response => {
            });
    }

    save() {
        this.announcement.imageId = [];
        this.uploader.queue.forEach(el => {
            this.announcement.imageId.push(JSON.parse(el._xhr.response).id);
         });
        this.announcementService.create(this.announcement)
            .subscribe((res: Announcement) => {
                this.onSaveSuccess(res);
            }, (res: Response) => this.onSaveError(res.json()));
    }


    private onSaveSuccess(result: Announcement) {
    }

    private onSaveError(error) {
    }
}
