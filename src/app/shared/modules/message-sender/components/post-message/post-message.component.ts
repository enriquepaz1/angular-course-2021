import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { HomeService } from 'src/app/pages/home/home.service';
import { PublicationService } from 'src/app/pages/shared/services/publication.service';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.scss']
})
export class PostMessageComponent implements OnInit {

  constructor(private authService:AuthService, private publicationService:PublicationService, private homeService:HomeService, public dialogRef:MatDialogRef<PostMessageComponent>) { }

  ngOnInit(): void {
  }

  onRegister(form:any){

    this.publicationService.create({
      ...form.value,
      idUser: this.authService.getUserId()
    }).subscribe( res => {
        this.homeService.setLoad(true);
    })

  }

}
