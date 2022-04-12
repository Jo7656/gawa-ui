import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsListComponent } from './plugins-list.component';

describe('PluginsListComponent', () => {
  let component: PluginsListComponent;
  let fixture: ComponentFixture<PluginsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
