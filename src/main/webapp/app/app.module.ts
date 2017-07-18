import './vendor.ts';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Routes, RouterModule} from '@angular/router';

import { NgJhipsterModule } from 'ng-jhipster';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2Webstorage } from 'ng2-webstorage';

import {AppComponent} from './app.components';
import {StartComponent} from './start/start.component';
import {AnnouncementComponent} from './announcement/announcement.component';
import {AnnouncementService} from './entities/announcement';
import {ImageService, ImagePreview} from './entities/image';
import {RegisterComponent, Register, PasswordStrengthBarComponent} from './register';
import {AnnouncementPagingParamsResolver, routes} from './app.route';
import {customHttpProvider } from './blocks/interceptor/http.provider';
import {AccountService, AuthServerProvider, Principal, StateStorageService} from './shared';
import {LoginService, LoginComponent} from './login';


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({}),
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        FileUploadModule
    ],
    declarations: [
        AppComponent,
        StartComponent,
        AnnouncementComponent,
        RegisterComponent,
        PasswordStrengthBarComponent,
        LoginComponent,
        ImagePreview
    ],
    providers: [
        AnnouncementService,
        ImageService,
        customHttpProvider(),
        AnnouncementPagingParamsResolver,
        Register,
        AccountService,
        AuthServerProvider,
        Principal,
        StateStorageService,
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
