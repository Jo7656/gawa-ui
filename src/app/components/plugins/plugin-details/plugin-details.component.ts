import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GatewayService } from 'src/app/shared/gateway.service';

@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.css']
})
export class PluginDetailsComponent implements OnInit {
  id: string;
  details: any;
  disableSelect = new FormControl(false);
  routeForm: FormGroup;

  routes:any

  constructor(
    private route: ActivatedRoute,
    private service: GatewayService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getRoutes().subscribe(routes=>{
      console.log("1110000000000001", routes)
    this.routes=routes;
    })
    this.id = this.route.snapshot.paramMap.get('name');
    // if (this.id === '0') {
      this.routeForm = this.fb.group({
        configId:[null],
        routeId: [null, Validators.required],
        headersToAdd: ['', Validators.required],
        headersToRemove: ['', Validators.required],
        queryParamsToAdd: ['', Validators.required],
        queryParamsToRemove: ['', Validators.required]
      });
    // } else {
    //   this.service.getPluginDetailsById(this.id).subscribe((data) => {
    //     this.details = data;
    //     this.disableSelect.patchValue({disableSelect:true})
    //     if (this.details) {
    //       this.routeForm = this.fb.group({
    //         configId:[this.id],
    //         routeId: [this.details.routeId?this.details.routeId:null, Validators.required],
    //         headersToAdd: ['', Validators.required],
    //         headersToRemove: ['', Validators.required],
    //         queryParamsToAdd: ['', Validators.required],
    //         queryParamsToRemove: ['', Validators.required]
    //       });
    //     }
    //   });
    // }
  }

  onSubmit() {
    console.log('1111111111111',this.routeForm.value)
        if (this.routeForm.valid) {
      this.service
        .addPluginToRoute(this.id,{
          configId:this.routeForm.value.routeId.configId,
          routeId: this.routeForm.value.routeId.routeId,
          headersToAdd: this.routeForm.value.headersToAdd,
          headersToRemove: this.routeForm.value.headersToRemove,
          queryParamsToAdd: this.routeForm.value.queryParamsToAdd,
          queryParamsToRemove: this.routeForm.value.queryParamsToRemove,
         
        })
        .subscribe((data) => {
          // this.alertService.success('Route Saved',this.options)
          this.router.navigate(['/routes']);
          // console.log('111111111111111111', data);
        });
    }
  }
}
