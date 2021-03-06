/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.208.4.27:8060';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
