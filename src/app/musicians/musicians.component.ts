import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.scss']
})
export class MusiciansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
