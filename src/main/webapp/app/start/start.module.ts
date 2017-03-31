import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {JhipsterSharedModule} from '../shared';

import {StartComponent} from './';
import {startRoute} from './';
import {MaterialModule} from '@angular/material';

@NgModule({
    imports: [
        MaterialModule,
        RouterModule.forRoot([startRoute], {useHash: true})
    ],
    declarations: [
        StartComponent,
    ],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartModule {
}
