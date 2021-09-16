import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageSenderModule } from 'src/app/shared/modules/message-sender/message-sender.module';
import { PostModule } from 'src/app/shared/modules/post/post.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';

const routes:Routes=[
  {path:'',component:ProfileComponent}

  ]


@NgModule({
  imports: [
    CommonModule,
    MessageSenderModule,
    PostModule,
    SharedMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
