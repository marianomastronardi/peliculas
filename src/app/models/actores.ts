export class Actores {
    id!:string;
    nombre!:string;
    apellido!:string;
    sexo!:string;
    fechaNacimiento!:string;
    pais!:any;
    foto!:string;

    constructor(){
    this.id = '';
    this.nombre = '';
    this.apellido = '';
    this.sexo = '';
    this.fechaNacimiento = '';
    this.pais = {};
    this.foto = '';
    }
}
