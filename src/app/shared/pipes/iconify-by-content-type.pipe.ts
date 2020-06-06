import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'iconifyByContentType'
})

export class IconifyByContentTypePipe implements PipeTransform {
    transform(contentType: string) : string {
        if (!contentType) {
            return contentType;
        }

        let result;
        switch (contentType) {
            case 'application/pdf':
                result = 'fa fa-file-pdf-o fa-2x';
                break;
            case 'image/jpeg':
                result = 'fa fa-file-image-o fa-2x';
                break;
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                result = 'fa fa-file-word-o fa-2x';
                break;
            case 'application/vnd.ms-excel':
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                result = 'fa fa-file-excel-o fa-2x';
                break;
            case 'application/zip':
            case 'application/x-rar-compressed':
                result = 'fa fa-file-archive-o fa-2x';
                break;
            case 'video/x-msvideo':
            case 'video/quicktime':
            case 'video/3gpp':
            case 'video/x-ms-wmv':
                result = 'fa fa-file-video-o fa-2x';
                break;
            default:
                result = 'fa fa-file-o fa-2x';
                break;
        }
        return result;
    }
}