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

  columndefs : any[] = ['routePath','routeMethod','routeUri', 'actions'];

  listData:MatTableDataSource<any>;

  searchKey:string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private gateWayService:GatewayService, private router: Router) { }

  ngOnInit(): void {
    this.gateWayService.getAvailablePluginsList().subscribe(plugins=>{
     console.log("1111111111",plugins);
    })
  }
}
