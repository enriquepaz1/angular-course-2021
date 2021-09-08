import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Votacion1Component } from './votacion1/votacion1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes[{
  path: 'votacion1';
  component: 'Votacion1Component';
}];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [Votacion1Component]
})
export class VotacionModule {}
