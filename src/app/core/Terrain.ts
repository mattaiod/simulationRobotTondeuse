export class Terrain{
    private longueurX:number;
    private longueurY:number;
    public cases:object;
    public listeRobot;
  
    constructor(longueurX: number, longueurY:number, listeRobot:object) {
        this.longueurX = longueurX;
        this.longueurY = longueurY;
        this.listeRobot = listeRobot;
        this.initialiserTerrain();
        console.log("Terrain initialisé sans robots(Selon ton navigateur, les robots peuvent en fait tout de même apparaître sur le terrain!");
        console.log(this.cases);
        this.placerRobot();
        console.log("Terrain initialisé avec robots");
        console.log(this.cases);
        console.log("les tableaux suivants représentent pas à pas l'exécution des programmes des robots");
        this.lancerRobots();
    }
  
    public initialiserTerrain(){
        this.cases = new Array();
        for(var i=0; i<this.longueurY; i++){
            this.cases[i] = new Array();
        }
        for(var i=0; i<this.longueurY; i++){
            for(var j=0; j<this.longueurX; j++){
                this.cases[i][j] = "X";
            }
        }
    }

    public placerRobot(){
        for (let i= 0; i < this.listeRobot.length; i++ ){
            let xRobot = this.listeRobot[i].getX();
            let yRobot = this.listeRobot[i].getY();
            let orientationRobot = this.listeRobot[i].getOrientation();
            this.cases[(this.longueurY-1) - yRobot][xRobot] = `${i+1}${orientationRobot}`;
        }
    }

    public lancerRobots(){
        for (let i = 0; i< this.listeRobot.length; i++){
            while(this.listeRobot[i].curseurProgramme < this.listeRobot[i].programmeDeplacement.length){
                this.listeRobot[i].avancerProgrammeDeplacement(this.longueurX, this.longueurY);
                this.initialiserTerrain();
                this.placerRobot();
                console.log(this.cases)
            }
            console.log(`Le robot numéro ${i+1} a terminé, sa position finale est: ${this.listeRobot[i].getX()} ${this.listeRobot[i].getY()} ${this.listeRobot[i].getOrientation()}`);
        } 
    }

    public getCases(){
        return this.cases;
    }
}
  