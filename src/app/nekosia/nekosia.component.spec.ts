import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NekosiaComponent } from './nekosia.component';

describe('NekosiaComponent', () => {
  let component: NekosiaComponent;
  let fixture: ComponentFixture<NekosiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NekosiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NekosiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
