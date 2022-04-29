import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GatewayService } from 'src/app/shared/gateway.service';

@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.css'],
})
export class PluginDetailsComponent implements OnInit {
  name: string;
  id: string;
  details: any;
  disableSelect = new FormControl(false);
  routeForm: FormGroup;

  routes: any;

  constructor(
    private route: ActivatedRoute,
    private service: GatewayService,
    private fb: FormBuilder,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.routeForm = this.fb.group({
      configId: [null],
      routeId: [null],
      headersToAdd: ['', Validators.required],
      headersToRemove: ['', Validators.required],
      queryParamsToAdd: ['', Validators.required],
      queryParamsToRemove: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getRoutes().subscribe((routes) => {
      this.routes = routes;
    });
    this.name = this.route.snapshot.paramMap.get('name')
      ? this.route.snapshot.paramMap.get('name')
      : 'RequestTransformer';
    this.id = this.route.snapshot.paramMap.get('id');


    if (this.id !== null) {
      this.service.getPluginDetailsById(this.id).subscribe((data) => {
        this.details = data;
      
        this.disableSelect.patchValue({ disableSelect: true });
        if (this.details) {
          this.routeForm.patchValue({
            headersToAdd: this.details.headersToAdd,
            headersToRemove: this.details.headersToRemove,
            queryParamsToAdd: this.details.queryParamsToAdd,
            queryParamsToRemove: this.details.queryParamsToRemove,
          });
        }
      });
      this.routeForm.disable();
    }
  }

  onSubmit() {
    if (this.routeForm.valid) {
      if (this.id !== null) {
        this.service
        .addPluginToRoute(this.name, {
          configId: this.id,
          headersToAdd: this.routeForm.value.headersToAdd,
          headersToRemove: this.routeForm.value.headersToRemove,
          queryParamsToAdd: this.routeForm.value.queryParamsToAdd,
          queryParamsToRemove: this.routeForm.value.queryParamsToRemove,
        })
        .subscribe((data) => {
            this.router.navigate(['/plugins']);
        });
      }else{
        this.service
        .addPluginToRoute(this.name, {
          configId: this.routeForm.value.routeId.configId,
          routeId: this.routeForm.value.routeId.routeId,
          headersToAdd: this.routeForm.value.headersToAdd,
          headersToRemove: this.routeForm.value.headersToRemove,
          queryParamsToAdd: this.routeForm.value.queryParamsToAdd,
          queryParamsToRemove: this.routeForm.value.queryParamsToRemove,
        })
        .subscribe((data) => {
          this.router.navigate(['/plugins']);
        });
      }
    
    }
  }
}
