import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeinenComponent } from './seinen.component';

describe('ShounenComponent', () => {
  let component: SeinenComponent;
  let fixture: ComponentFixture<SeinenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeinenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

