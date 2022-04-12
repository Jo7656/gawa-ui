import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from 'src/app/shared/gateway.service';

@Component({
  selector: 'app-plugins-list',
  templateUrl: './plugins-list.component.html',
  styleUrls: ['./plugins-list.component.css'],
})
export class PluginsListComponent implements OnInit {
  pluginsList: any;
  constructor(private gateWayService: GatewayService, private router: Router) {}

  ngOnInit(): void {
    this.gateWayService.getAvailablePluginsList().subscribe((plugins) => {
      this.pluginsList = plugins;
    });
  }
}
