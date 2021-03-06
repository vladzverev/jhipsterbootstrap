import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams, BaseRequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {FileUploader} from 'ng2-file-upload';

@Injectable()
export class ImageService {

    private resourceUrl;

    constructor(private http: Http) {
        this.resourceUrl = 'api/images';

    }

    create(uploader: FileUploader) {
        uploader.uploadAll();
/*        let copy: Image = Object.assign({}, image);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });*/
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<Response> {
        //   let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl/*, options*/);
    }


    private createRequestOption(req?: any): BaseRequestOptions {
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
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
