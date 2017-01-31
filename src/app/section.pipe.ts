import { Pipe, PipeTransform } from '@angular/core';
import { Musician } from './musician.model';
import { MusicianService } from './musician.service';


@Pipe({
  name: 'section',
  pure: false
})
export class SectionPipe implements PipeTransform {

  transform(input: Musician[], desiredSection) {
    var output: Musician[] = [];
    if (desiredSection === "strings") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].instrument === "violin" || input[i].instrument === "cello" || input[i].instrument === "cello" || input[i].instrument === "viola" || input[i].instrument === "bass" || input[i].instrument === "harp") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSection === "brass") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].instrument === "frenchHorn" || input[i].instrument === "englishHorn" || input[i].instrument === "trombone" || input[i].instrument === "trumpet" || input[i].instrument === "tuba") {
              output.push(input[i]);
            }
          }
      return output
    } else if (desiredSection === "woodwinds") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].instrument === "clarinet" || input[i].instrument === "flute" || input[i].instrument === "piccolo" || input[i].instrument === "bassoon" || input[i].instrument === "contrabassoon" || input[i].instrument === "oboe" || input[i].instrument === "bassClarinet") {
            output.push(input[i]);
          }
        }
      return output
    } else if (desiredSection === "percussion") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].instrument === "timpani" || input[i].instrument === "percussion") {
            output.push(input[i]);
          }
        }
      return output
    } else {
      return input;
    }
  }
}
