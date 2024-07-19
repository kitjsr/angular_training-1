import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnoticeComponent } from './viewnotice.component';

describe('ViewnoticeComponent', () => {
  let component: ViewnoticeComponent;
  let fixture: ComponentFixture<ViewnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewnoticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
