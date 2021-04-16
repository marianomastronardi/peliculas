export class Pelicula{
    id!:string;
    nombre!:string;
    tipo!:string; // { terror , comedia, amor ,otros }
    fechaDeEstreno!:string;
    cantidadDePublico!:number;
    fotoPelicula!:string;

     constructor(){
        this.id = '';
        this.nombre = '';
        this.tipo = '';
        this.fechaDeEstreno = '';
        this.cantidadDePublico = 0;
        this.fotoPelicula = '';
    } 
}