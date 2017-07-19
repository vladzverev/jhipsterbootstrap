import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

import {Announcement, AnnouncementService} from './../entities/announcement';
import {Image, ImageService} from './../entities/image';

import {ITEMS_PER_PAGE, Principal} from './../shared';


@Component({
    selector: 'start-page',
    templateUrl: 'start.component.html',
})
export class StartComponent implements OnInit {
    innerHeight: string;
    announcements: Announcement[];
    images: Image[];
    search: string;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;


    constructor(private announcementService: AnnouncementService,
                private imageService: ImageService,
                private principal: Principal,
                private activatedRoute: ActivatedRoute,
                private router: Router
    ) {
        this.innerHeight = (window.screen.height) / 2 + 'px';

        this.itemsPerPage = ITEMS_PER_PAGE;
        this.activatedRoute.data.subscribe(data => {
            this.page = data['pagingParams'].page;
            this.previousPage = data['pagingParams'].page;
            this.reverse = data['pagingParams'].ascending;
            this.predicate = data['pagingParams'].predicate;
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    load() {
        /*        this.announcementService.query({
         page: this.page - 1,
         size: this.itemsPerPage,
         sort: this.sort()}).subscribe(
         (res: Response) => this.onSuccess(res.json(), res.headers),
         (res: Response) => this.onError(res.json())
         );*/
        this.imageService.query().subscribe(
            (res: Response) => this.onSuccessImage(res.json(), res.headers),
            (res: Response) => this.onErrorImage(res.json())
        );
    }

    private onSuccessImage(data, headers) {
        this.images = data;
    }

    private onErrorImage(error) {
    }

    private onSuccess(data, headers) {
        this.announcements = data;
    }

    private onError(error) {
    }

    choosePage(){
        if (this.isAuthenticated()) {
            this.router.navigate (['announcement']);
        } else {
            this.router.navigate (['login']);
        }
    }

    sort() {
        let result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    ngOnInit() {
        this.principal.identity();
    }
}
