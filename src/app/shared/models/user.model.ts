export class User{
    public name:String;
    public phone:String;
    public email:String;
    public password:String;
   
    public constructor(data:any){
        this.name = data.name || '';
        this.phone = data.phone || '';   
        this.email = data.email || '';   
        this.password = data.password || '';   
    }
}

