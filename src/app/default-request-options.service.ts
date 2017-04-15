import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

    constructor() {
        super();
        // Set the default 'Content-Type' header
        this.headers.set('Content-Type', 'application/json');
    }

    setHeaders(type: string, value: string) {
    	this.headers.set(type, value);
    }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };