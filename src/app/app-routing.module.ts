import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListsComponent } from './components/tutorials-lists/tutorials-lists.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'tutorials' },
  {path: 'tutorials', component: TutorialsListsComponent },
  {path: 'tutorials/:id', component: TutorialDetailsComponent},
  {path: 'add', component: AddTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
