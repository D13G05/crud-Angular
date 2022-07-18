import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
// import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
// import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
// import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

import { CreateNewComponent } from "./employee/pages/create-new/create-new.component";
import { DeleteByIdComponent } from "./employee/pages/delete-by-id/delete-by-id.component";
import { FindByIdComponent } from "./employee/pages/find-by-id/find-by-id.component";
import { GetAllComponent } from "./employee/pages/get-all/get-all.component";
import { UpdateByIdComponent } from "./employee/pages/update-by-id/update-by-id.component";

const routes: Routes = [
    {
        path: '',
        component: GetAllComponent,
        pathMatch: 'full'
    },
    {
        path: 'employee/:id',
        component: FindByIdComponent
    },
    {
        path: 'employee/new/:id',
        component: CreateNewComponent
    },
    {
        path: 'employee/delete/:id',
        component: DeleteByIdComponent
    },
    {
        path: 'employee/update/:id',
        component: UpdateByIdComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

