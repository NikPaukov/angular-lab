import {Component, OnInit} from '@angular/core';
import * as alphabet from 'src/assets/alphabet.json';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css']
})
export class TransComponent {
  translate(data: string) {
    // @ts-ignore
    const res = data.split("").map(letter => alphabet[letter] || letter);
    return res.join("");
  }

  write(input: string) {

    const difference = input.length - this.untranslated.length;
    if (difference > 0) {
      const newData = input.slice(-difference);
      this.translated += this.translate(newData);
    } else {
      if (this.untranslated.includes(input) || this.untranslated[0]===input[0]) {
        this.translated = this.translate(input);
      }
    }

    this.untranslated = input;
  }

  constructor() {
  }

  untranslated = ""
  translated = "";
}
