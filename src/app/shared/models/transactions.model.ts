export class Transactions{
    public id:String;
    public state:String;
    public service:Object;

    public constructor(data:any){
        this.id = data.id || '';
        this.state = data.state || '';   
        this.service = data.service || '';   
        
    }
}

