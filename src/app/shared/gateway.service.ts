import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http: HttpClient) { }


  getRoutes(){
    return this.http.get(`http://localhost:8080/routes`);
  }

  getRouteDetails(id:string){
    return this.http.get(`http://localhost:8080/route/`+id);
  }

  createRoute(req:any){
    return this.http.post(`http://localhost:8080/route`,req);
  }

  deleteRoute(id:number){
    return this.http.delete(`http://localhost:8080/route/`+id);
  }

  /////////////////////////////////////

  getAvailablePluginsList(){
    return this.http.get(`http://localhost:8080/v1/plugins/new`);
  }

  getPluginConfigs(){
    return this.http.get(`http://localhost:8080/v1/plugins`);
  }
  deletePluginDetails(id){
    return this.http.delete(`http://localhost:8080/v1/plugins/`+id);
  }
  getPluginDetailsById(id){
    return this.http.get(`http://localhost:8080/v1/plugins/`+id);
  }
  addPluginToRoute(name,req){
    return this.http.post(`http://localhost:8080/v1/plugins/`+name,req);
  }
}