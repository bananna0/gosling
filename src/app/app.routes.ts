import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { PhotoRoutes } from './photo/index';
import { GameRoutes } from './game/index';
import { MusicRoutes } from './music/index';

export const routes: Routes = [
    ...HomeRoutes,
    ...PhotoRoutes,
    ...GameRoutes,
    ...MusicRoutes,
    { path: '**', redirectTo: 'welcome' }
];