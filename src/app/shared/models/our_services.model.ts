export class OurServices{
    public id:String;
    public package_name:String;
    public isActive:String;
   
    public constructor(data:any){
        this.id = data.id || '';
        this.package_name = data.package_name || '';
        this.isActive = data.isActive || '';   
    }
}

