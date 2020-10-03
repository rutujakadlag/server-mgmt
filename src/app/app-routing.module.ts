import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintServerDetailsComponent } from './print-server-details/print-server-details.component';
import { ServerTableComponent } from './server-table/server-table.component';


const routes: Routes = [  { path: 'serverList', component : ServerTableComponent}, 
{ path: 'printServerDetails', component : PrintServerDetailsComponent}, 
{
  path: '**',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
