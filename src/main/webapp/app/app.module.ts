import './vendor.ts';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Routes, RouterModule} from '@angular/router';

import { NgJhipsterModule } from 'ng-jhipster';
import { FileUploadModule } from 'ng2-file-upload';

import {AppComponent} from './app.components';
import {StartComponent} from './start/start.component';
import {AnnouncementComponent} from './announcement/announcement.component';
import {AnnouncementService} from './entities/announcement';
import {ImageService} from './entities/image';
import {RegisterComponent, Register, PasswordStrengthBarComponent} from './register';
import {AnnouncementPagingParamsResolver, routes} from './app.route';
import {Principal} from './shared';


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({}),
        FileUploadModule
    ],
    declarations: [
        AppComponent,
        StartComponent,
        AnnouncementComponent,
        RegisterComponent,
        PasswordStrengthBarComponent
    ],
    providers: [
        AnnouncementService,
        ImageService,
        AnnouncementPagingParamsResolver,
        Register,
        Principal
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
