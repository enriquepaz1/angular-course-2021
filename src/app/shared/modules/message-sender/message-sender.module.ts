import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MessageSenderComponent} from "./message-sender.component";
import {SharedMaterialModule} from "../../shared-material.module";
import { PostMessageComponent } from './components/post-message/post-message.component';
import { FormsModule } from '@angular/forms';
import { PublicationService } from 'src/app/pages/shared/services/publication.service';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule
  ],
  declarations: [
    MessageSenderComponent,
    PostMessageComponent
  ],
  exports: [
    MessageSenderComponent,
    PostMessageComponent
  ],
  providers:[
    PublicationService
  ]

})

export class MessageSenderModule {
}
