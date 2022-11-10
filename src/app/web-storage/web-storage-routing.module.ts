import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageComponent } from './local-storage.component';
import { SessionStorageComponent } from './session-storage.component';
import { WebStorageComponent } from './web-storage.component';

const routes: Routes = [
    {
        path: '',
        component: WebStorageComponent,
        children: [
            { path: 'local', component: LocalStorageComponent },
            { path: 'session', component: SessionStorageComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WebStorageRoutingModule {}
