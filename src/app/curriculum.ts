import { IEducacion } from './ieducacion';
import { IExperiencia } from './iexperiencia';

export class Curriculum {
    private _nombre: string;
    private _apellido: string;
    private _dni:string;
    private _genero:string;
    private _email:string;
    private _telefono:string;
    private _apodo:string; 
    private _educacion:IEducacion[];
    private _experiencia:IExperiencia[];

    constructor( 
        nombre: string, 
        apellido: string, 
        dni:string,
        genero:string, 
        email:string, 
        telefono:string, 
        apodo:string, 
        educacion:IEducacion[], 
        experiencia:IExperiencia[]
    ){
        this._nombre = nombre;
        this._apellido = apellido;
        this._dni = dni;
        this._genero = genero;
        this._email = email;
        this._telefono = telefono;
        this._apodo = apodo; 
        this._educacion = educacion;
        this._experiencia = experiencia;            
    }

    get nombre(): string{ return this._nombre };
    get apellido(): string{ return this._apellido };
    get dni():string{ return this._dni };
    get genero():string{ return this._genero };
    get email():string{ return this._email };
    get telefono():string{ return this._telefono };
    get apodo():string{ return this._apodo }; 
    get educacion():IEducacion[]{ return this._educacion };
    get experiencia():IExperiencia[]{ return this._experiencia };

    set nombre(nombre:string){ this._nombre = nombre };
    set apellido(apellido:string){ this._apellido = apellido };
    set dni(dni:string){ this._dni = dni };
    set genero(genero:string){ this._genero = genero };
    set email(email:string){ this._email = email };
    set telefono(telefono:string){ this._telefono = telefono };
    set apodo(apodo:string){ this._apodo = apodo }; 
    set educacion(educacion:IEducacion[]){ this._educacion = educacion };
    set experiencia(experiencia:IExperiencia[]){ this._experiencia = experiencia };

}
