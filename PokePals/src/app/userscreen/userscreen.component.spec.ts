import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscreenComponent } from './userscreen.component';

describe('UserscreenComponent', () => {
  let component: UserscreenComponent;
  let fixture: ComponentFixture<UserscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
