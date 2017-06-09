import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Announcement } from './announcement.model';

@Injectable()
export class AnnouncementService {

    private resourceUrl = 'api/announcements';

    constructor(private http:Http) {
    }

    create(announcement:Announcement):Observable<Announcement> {
        let copy:Announcement = Object.assign({}, announcement);
        return this.http.post(this.resourceUrl, copy).map((res:Response) => {
            return res.json();
        });
    }

    query(req?:any):Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            ;
    }

    private createRequestOption(req?:any):BaseRequestOptions {
        let options:BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params:URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }

}
