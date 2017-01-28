import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Musician } from '../musician.model';
import { MusicianService } from '../musician.service';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.scss'],
  providers: [MusicianService]
})

export class MusicianDetailComponent implements OnInit {
  musicianId: string;
  musicianToDisplay: FirebaseObjectObservable<Musician>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private musicianService: MusicianService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.musicianId = urlParametersArray['id'];
    });
    this.musicianToDisplay = this.musicianService.getMusicianById(this.musicianId);
    }
  }
