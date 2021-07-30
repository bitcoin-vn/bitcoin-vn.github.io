import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyNotesComponent } from './my-notes.component';

describe('MyNotesComponent', () => {
  let component: MyNotesComponent;
  let fixture: ComponentFixture<MyNotesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
