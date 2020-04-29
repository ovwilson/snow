
import { HttpHeaders } from '@angular/common/http';
import { NOWToken } from './now';

export const defaultHeaders = () => new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

export const NOWHeaders = () => new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('X-UserToken', NOWToken());