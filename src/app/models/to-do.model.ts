export class TodoModel {
    title:string;
    description:string;
    completed:boolean= false;
    id:number;
    constructor( title: string, descriprion: string, completed: boolean, id: number){
        this.title = title;
        this.description = descriprion;
        this.completed = completed;
        this.id = id
    }

}