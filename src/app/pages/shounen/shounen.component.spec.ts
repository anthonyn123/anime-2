import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShounenComponent } from './shounen.component';

describe('ShounenComponent', () => {
  let component: ShounenComponent;
  let fixture: ComponentFixture<ShounenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShounenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShounenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
