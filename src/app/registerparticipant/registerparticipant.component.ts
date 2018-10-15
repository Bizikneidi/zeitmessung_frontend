import { Component, OnInit } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Participant} from '../entities/participant';
import { CountryList, Country } from '../entities/countryList';
import {ParticipantService} from '../services/participant/participant.service';

@Component({
  selector: 'app-registerparticipant',
  templateUrl: './registerparticipant.component.html',
  styleUrls: ['./registerparticipant.component.css']
})
export class RegisterparticipantComponent implements OnInit {

  icon = faLongArrowAltLeft;
  participant = new Participant();
  countryList = CountryList.ListOfCountries;

  constructor(private ws: ParticipantService) {
  }

  ngOnInit() {
  }

  changeSex(c) {
    this.participant.Sex = c;
  }

  register() {
    this.ws.register(this.participant);
    this.ws.disconnect();
  }
}
