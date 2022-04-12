import { Component, OnInit, ViewChild } from '@angular/core';
import { GatewayService } from 'src/app/shared/gateway.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  array:any;  
  columndefs : any[] = ['routePath','routeMethod','routeUri', 'actions'];

  listData:MatTableDataSource<any>;
  displayedColumns:string[]=["name"];

  searchKey:string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private gateWayService:GatewayService, private router: Router) { }



ngOnInit(): void {
  this.gateWayService.getRoutes().subscribe(routes=>{
    this.array=routes;
    this.listData=new MatTableDataSource(this.array);
    this.listData.sort=this.sort;
    this.listData.paginator=this.paginator
  })

  }

  deleteRoute(routeId:any){
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
