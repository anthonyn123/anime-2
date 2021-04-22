import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShounenComponent } from './pages/shounen/shounen.component';
import { SeinenComponent } from './pages/seinen/seinen.component';

const routes: Routes = [
  {path:'shounen',component: ShounenComponent},
  {path:'seinen',component: SeinenComponent},
]


;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
