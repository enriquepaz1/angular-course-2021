import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { PublicationService } from '../shared/services/publication.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private publicationService:PublicationService, private authService:AuthService, private matDialog:MatDialog) {}

  ngOnInit() {

    const id = this.authService.getUserId();
    console.log('ID', id)
    if(id) {
      this.publicationService.getAllById(id).subscribe(
        res => {
          console.log('PROFILE: ', res);
        }
      )
    }
  }

}
