import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';
@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne> = new Array<Personne>();
  personne: Personne = {};
  constructor(private personneService: PersonneService) { }
  ngOnInit(): void {
    this.personneService.getAll().subscribe(res =>{
      this.personnes = res;
    });
  };
  ajouterPersonne(): void {
    this.personneService.addPerson(this.personne);
    // this.personnes = this.personneService.getAll();
    this.personne = {};
  }
}