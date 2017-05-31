import { Injectable } from '@angular/core';

@Injectable()
export class Principal {
    private authenticated = false;

    isAuthenticated(): boolean {
        return this.authenticated;
    }

}
