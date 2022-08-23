import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposdecultivoComponent } from './tiposdecultivo.component';

describe('TiposdecultivoComponent', () => {
  let component: TiposdecultivoComponent;
  let fixture: ComponentFixture<TiposdecultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposdecultivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposdecultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
