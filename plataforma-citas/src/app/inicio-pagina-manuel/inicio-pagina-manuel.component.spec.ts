import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPaginaManuelComponent } from './inicio-pagina-manuel.component';

describe('InicioPaginaManuelComponent', () => {
  let component: InicioPaginaManuelComponent;
  let fixture: ComponentFixture<InicioPaginaManuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPaginaManuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPaginaManuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
