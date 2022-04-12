import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GatewayService } from 'src/app/shared/gateway.service';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css'],
})
export class RouteDetailsComponent implements OnInit {
  id: string;
  details: any;

  routeForm: FormGroup;
  options = {
    autoClose: true,
    keepAfterRouteChange: false,
  };

  constructor(
    private route: ActivatedRoute,
    private service: GatewayService,
    private fb: FormBuilder,
    public alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === '0') {
      this.routeForm = this.fb.group({
        routeId: [null],
        routeMethod: ['', Validators.required],
        routePath: ['', Validators.required],
        routeUri: ['', Validators.required],
        stripPath: ['no'],
      });
    } else {
      this.service.getRouteDetails(this.id).subscribe((data) => {
        this.details = data;
        if (this.details) {
          this.routeForm = this.fb.group({
            routeId: [this.details.routeId, Validators.required],
            routeMethod: [this.details.routeMethod, Validators.required],
            routePath: [this.details.routePath, Validators.required],
            routeUri: [this.details.routeUri, Validators.required],
            stripPath: [
              this.details.stripPath ? 'yes' : 'no',
              Validators.required,
            ],
          });
        }
      });
    }
  }

  onSubmit() {
    console.warn(this.routeForm.value);

    if (this.routeForm.value) {
      this.service
        .createRoute({
          routeId: this.routeForm.value.routeId,
          routeMethod: this.routeForm.value.routeMethod,
          routePath: this.routeForm.value.routePath,
          routeUri: this.routeForm.value.routePath,
          stripPath: this.routeForm.value.stripPath=='yes'?true:false,
        })
        .subscribe((data) => {
          // this.alertService.success('Route Saved',this.options)
          this.router.navigate(['/routes']);
          // console.log('111111111111111111', data);
        });
    }
  }
}
