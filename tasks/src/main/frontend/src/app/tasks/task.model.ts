export class Task{
    public id : number;
    public name : string;
    public completed : boolean;
    public dueDate : string;

    //id will be removed lated because it will be generated.
    constructor (   id : number,  name : string, completed : boolean , dueDate : string){
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.dueDate = dueDate;
    }
}
