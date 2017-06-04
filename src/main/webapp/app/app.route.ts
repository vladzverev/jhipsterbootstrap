import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StartComponent} from './start/start.component';
import {AnnouncementComponent} from './announcement/announcement.component';
import {RegisterComponent} from './register';
import {LoginComponent} from './login';
//import {AnnouncementPagingParamsResolver} from './entities/announcement/announcement-paging-params.resolver';

import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { PaginationUtil } from 'ng-jhipster';

@Injectable()
export class AnnouncementPagingParamsResolver implements Resolve<any> {

    constructor(private paginationUtil:PaginationUtil) {
    }

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }
}

export const routes:Routes = [
    // {path: '', redirectTo: '/start', pathMatch: 'full'},
    {
        path: '',
        resolve: {
            'pagingParams': AnnouncementPagingParamsResolver
        },
        component: StartComponent
    },
    {path: 'announcement', component: AnnouncementComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}

];
