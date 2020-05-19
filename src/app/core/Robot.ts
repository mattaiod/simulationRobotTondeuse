export class Robot {

    private x:number;
    private y:number;
    private orientation:string;
    private programmeDeplacement:string;
    private curseurProgramme = 0;
  
    constructor(x: number, y: number, orientation: string, programmeDeplacement: string) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.programmeDeplacement = programmeDeplacement;
    }
  
    public avancer(xTerrain, YTerrain){
        if (this.verifierDeplacementPossible(xTerrain,YTerrain) == false){
            return;
        }
        switch(this.orientation) {
            case 'N':
                this.y++;
                break;
            case 'E':
                this.x++;
                break;
            case 'S':
                this.y--;
                break;
            case 'W':
                this.x--;
                break;
            default:
            console.log(`L'orientation demandée n'existe pas`);
        }
    }
  
    public avancerProgrammeDeplacement(xTerrain:number, yTerrain:number){
        if(this.programmeDeplacement[this.curseurProgramme] === "A"){
            this.avancer(xTerrain, yTerrain);
        }
        else{
            this.changerOrientation(this.programmeDeplacement[this.curseurProgramme])
        }
        this.curseurProgramme++;    
    }

    public verifierDeplacementPossible(xTerrain:number,yTerrain:number){
        switch(this.orientation) {
            case 'N':
                if(this.y + 1 > yTerrain-1){
                    return false;
                }
                return true;
            case 'E':
                if(this.x + 1 > xTerrain-1){
                    return false;
                }
                return true;
            case 'S':
                if(this.y - 1 < 0){
                    return false;
                }
                return true;
            case 'W':
                if(this.x - 1 > 0){
                    return false;
                }
                return true;
            default:
                return false;
                console.log(`L'orientation demandée n'existe pas`);
          }
        }
  
    public changerOrientation(orientation:string){
        switch (this.orientation) {
            case 'N':
                if(orientation == "G"){
                    this.orientation = 'W';
                }
                if(orientation == "D"){
                    this.orientation = "E";
                }
                break;
            case 'E':
                if(orientation == "G"){
                    this.orientation = 'N';
                }
                if(orientation == "D"){
                    this.orientation = "S";
                }
                break;
            case 'S':
                if(orientation == "G"){
                    this.orientation = 'E';
                }
                if(orientation == "D"){
                    this.orientation = "W";
                }
                break;
            case 'W':
                if(orientation == "G"){
                    this.orientation = 'S';
                }
                if(orientation == "D"){
                    this.orientation = "N";
                }
                break;
            default:
              console.log(`Problème changement orientation`);
        }
    }
    
    public getX(){
        return(this.x);  
    }

    public getY(){
        return(this.y);  
    }

    public getOrientation(){
        return(this.orientation);  
    }
  }