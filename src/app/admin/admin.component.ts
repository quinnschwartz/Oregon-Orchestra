import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MusicianService } from '../musician.service';
import { Musician } from '../musician.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MusicianService]
})
export class AdminComponent implements OnInit {

  constructor(private musicianService: MusicianService) { }

  ngOnInit() {
  }

  submitForm(name: string, section: string, instrument: string, bio: string) {
    var newMusician: Musician = new Musician(name, instrument, bio);
    this.musicianService.addMusician(newMusician);
  }

}
