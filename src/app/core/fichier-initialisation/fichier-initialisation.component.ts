import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Robot } from "../Robot";
import { Terrain } from "../Terrain"

@Component({
  selector: 'app-fichier-initialisation',
  templateUrl: './fichier-initialisation.component.html',
  styleUrls: ['./fichier-initialisation.component.css']
})

@Injectable()
export class FichierInitialisationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fileContent='';
  terrain: Terrain;
  listeRobot= [];

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    let contenu;
    fileReader.onloadend = function(x) {
      contenu = fileReader.result;
      console.log("Voici le contenu brut extrait du fichier:");
      console.log(contenu);
      contenu = contenu.replace(",,","");
      contenu = contenu.replace(/\r/g,"");
      contenu = contenu.split('\n');
      self.fileContent = contenu;
      console.log("Voici maintenant le contenu d'une forme exploitable:");
      console.log(contenu);

      self.initialiserSimulation()
    }
    fileReader.readAsText(file);
    
  }
  
  public initialiserSimulation(){
    this.ajouterRobot();
    this.ajouterTerrain();
  }

  public ajouterTerrain(){
    let dimensions = this.fileContent[0].split(' ');
    this.terrain = new Terrain(parseInt(dimensions[0])+1, parseInt(dimensions[1])+1, this.listeRobot);
  }

  public ajouterRobot(){
    let i = 1;
    while(i < this.fileContent.length){
      let localisation = this.fileContent[i].split(' ');
      let nouveauRobot = new Robot((parseInt)(localisation[0]), parseInt(localisation[1]), localisation[2], this.fileContent[i+1]);
      this.listeRobot.push(nouveauRobot);
      i = i+2;
    }
  }

  public getTerrain(){
    return this.terrain;
  }
}
