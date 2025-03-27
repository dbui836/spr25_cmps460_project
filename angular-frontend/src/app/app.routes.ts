import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import { DisplayPilotsComponent } from './pilots/display-pilots/display-pilots.component';
import { PilotsPageComponent } from './pilots/pilots-page/pilots-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'test',
        component: TestPageComponent
    },
    {
        path: 'pilots',
        component: PilotsPageComponent
    }
];
