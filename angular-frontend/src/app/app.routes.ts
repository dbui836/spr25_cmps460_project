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
import { FlightPageComponent } from './flight/flight-page/flight-page.component';
import { CreateFlightComponent } from './flight/create-flight/create-flight.component';
import { BookAFlightPageComponent } from './book_a_flight/book-a-flight-page/book-a-flight-page.component';
import { PassengerSeatPageComponent } from './flightSeat/passenger-seat-page/passenger-seat-page.component';
import { FlightSeatPageComponent } from './flightSeat/flight-seat-page/flight-seat-page.component';

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
    },
    {
        path: 'flights',
        component: FlightPageComponent
    },
    {
        path: 'createFlight',
        component: CreateFlightComponent
    },
    {
        path: 'book_a_flight',
        component: BookAFlightPageComponent
    },
    {
        path: 'mySeats/:id',
        component: PassengerSeatPageComponent
    },
    {
        path: 'flightSeats/:id',
        component: FlightSeatPageComponent
    }
];
