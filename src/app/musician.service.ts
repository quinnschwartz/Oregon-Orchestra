import { Injectable } from '@angular/core';
import { Musician } from './musician.model';
import { MUSICIANS } from './mock-musicians';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MusicianService {
  musicians: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.musicians = angularFire.database.list('musicians');
  }

  getMusicians() {
    return this.musicians;
  }

  addMusician(newMusician: Musician) {
    this.musicians.push(newMusician);
  }


  getMusicianById(musicianId: string){
    return this.angularFire.database.object('musicians/' + musicianId);
  }

}
