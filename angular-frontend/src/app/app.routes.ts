import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PilotsPageComponent } from './pilots/pilots-page/pilots-page.component';
import { CreatePilotComponent } from './pilots/create-pilot/create-pilot.component';
import { PassengerPageComponent } from './passengers/passenger-page/passenger-page.component';
import { CreatePassengerComponent } from './passengers/create-passenger/create-passenger.component';
import { PlaneModelPageComponent } from './planeModel/plane-model-page/plane-model-page.component';
import { CreatePlaneModelComponent } from './planeModel/create-plane-model/create-plane-model.component';
import { PlanePageComponent } from './plane/plane-page/plane-page.component';
import { CreatePlaneComponent } from './plane/create-plane/create-plane.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pilots',
        component: PilotsPageComponent
    },
    {
        path: 'createPilot',
        component: CreatePilotComponent
    },
    {
        path: 'passengers',
        component: PassengerPageComponent
    },
    {
        path: 'createPassenger',
        component: CreatePassengerComponent
    },
    {
        path: 'planeModel',
        component: PlaneModelPageComponent
    },
    {
        path: 'createPlaneModel',
        component: CreatePlaneModelComponent
    },
    {
        path: 'planes',
        component: PlanePageComponent
    },
    {
        path: 'createPlane',
        component: CreatePlaneComponent
    }
];
