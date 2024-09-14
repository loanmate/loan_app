import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { ContentLoanComponent } from './content-loan/content-loan.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loan-list', component: LoanListComponent },
  { path: 'loan-content/:loan', component: ContentLoanComponent },
  { path: 'about', component: AboutComponent },
  { path: 'loan-form/:formType', component: DynamicformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
