import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { Router } from '@angular/router';
import { MusicianService } from '../musician.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.scss'],
  providers: [MusicianService]
})
export class MusiciansComponent implements OnInit {

  musicians: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private musicianService: MusicianService) { }

  ngOnInit() {
    this.musicians = this.musicianService.getMusicians();
  }

  goToDetailPage(clickedMusician) {
    this.router.navigate(['musicians', clickedMusician.$id]);
  };
}
