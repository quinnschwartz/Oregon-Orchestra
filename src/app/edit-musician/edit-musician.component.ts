import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model'
import { MusicianService } from '../musician.service';

@Component({
  selector: 'app-edit-musician',
  templateUrl: './edit-musician.component.html',
  styleUrls: ['./edit-musician.component.scss'],
  providers: [MusicianService]
})

export class EditMusicianComponent implements OnInit {
  @Input() selectedMusician;

  constructor(private musicianService: musicianService) { }

  ngOnInit() {
  }

  beginUpdatingMusician(musicianToUpdate){
    this.musicianService.updateMusician(musicianToUpdate);
  }

  beginDeletingMusician(musicianToDelete){
    if(confirm("Are you sure you want to delete this musician from the orchestra?")){
      this.musicianService.deleteMusician(musicianToDelete);
    }
  }
}
