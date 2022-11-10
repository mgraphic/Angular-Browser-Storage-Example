import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'web-storage-example',
        loadChildren: () =>
            import('./web-storage/web-storage.module').then(
                (m) => m.WebStorageModule
            ),
    },
    {
        path: 'cache-storage-example',
        loadChildren: () =>
            import('./cache-storage/cache-storage.module').then(
                (m) => m.CacheStorageModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
