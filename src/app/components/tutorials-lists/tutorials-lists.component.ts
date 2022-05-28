import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-lists',
  templateUrl: './tutorials-lists.component.html',
  styleUrls: ['./tutorials-lists.component.scss']
})
export class TutorialsListsComponent implements OnInit {

  constructor(private service: TutorialService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log("HELLO clicked");
    // subsribe is needed if you want your call to fire ???
    // https://stackoverflow.com/questions/48385535/angular-httpclient-call-ignored
    this.service.getAll().subscribe(
      res => {
        console.log("HELLO response received = ", res);
      }
    );

  }

}
