export class Clients{
    public _id:String;
    public client_packages:Array<{}>;
    public f_name:String;
    public l_name:String;
    public org_name:String;
    public business_pan:String;
    public phone:String;
    public email:String;
    public address:String;
    public clients_domain:String;
    public client_access_token:String;
   
    public constructor(data:any){
        this._id = data._id || '';
        this.f_name = data.f_name || '';   
        this.l_name = data.l_name || '';   
        this.org_name = data.org_name || '';   
        this.business_pan = data.business_pan || '';   
        this.phone = data.phone || '';   
        this.email = data.email || '';   
        this.address = data.address || '';   
        this.clients_domain = data.clients_domain || '';   
        this.client_access_token = data.client_access_token || '';
        this.client_packages = data.client_packages || '';
    }
}

