import { Announcement } from '../announcement';
export class Image {
    constructor(
        public id?: number,
        public photo?: any,
        public announcement?: Announcement
    ) {
    }
}
