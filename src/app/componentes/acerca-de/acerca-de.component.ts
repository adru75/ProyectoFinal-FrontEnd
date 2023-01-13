import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  persona: persona = new persona("","","");


  constructor(public datosPorfolio:PorfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.getPersona().subscribe(data => {
      console.log(data);
      this.persona=data;
    });
  }

}
