import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'news',
        loadChildren: () => import('./_modules/news/news.module').then(m => m.NewsModule)
    },
    {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
