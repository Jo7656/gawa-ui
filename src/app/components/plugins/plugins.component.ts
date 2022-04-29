import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GatewayService } from 'src/app/shared/gateway.service';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit {

array:any;

  columndefs : any[] = ['configId','pluginName','actions'];

  listData:MatTableDataSource<any>;

  searchKey:string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private gateWayService:GatewayService, private router: Router) { }

  ngOnInit(): void {
    this.gateWayService.getPluginConfigs().subscribe(plugins=>{
     this.array=plugins;
    this.listData=new MatTableDataSource(this.array);
    this.listData.sort=this.sort;
    this.listData.paginator=this.paginator
    console.log("11111111111111111111", this.array)
    })
  }

  deletePlugin(routeId:any){
    this.gateWayService.deleteRoute(routeId).subscribe(data=>{
   this.gateWayService.getRoutes().subscribe(routes=>{
     this.array=routes;
     this.listData=new MatTableDataSource(this.array);
     this.listData.sort=this.sort;
     this.listData.paginator=this.paginator
   })
 })
}

openDetails(routeId:any){
 this.router.navigate(['/route', routeId]);    
}
}
