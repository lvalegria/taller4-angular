import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosjardinComponent } from './fotosjardin.component';

describe('FotosjardinComponent', () => {
  let component: FotosjardinComponent;
  let fixture: ComponentFixture<FotosjardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosjardinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotosjardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
