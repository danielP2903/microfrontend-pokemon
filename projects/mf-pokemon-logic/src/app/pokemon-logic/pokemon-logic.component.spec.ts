import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLogicComponent } from './pokemon-logic.component';

describe('PokemonLogicComponent', () => {
  let component: PokemonLogicComponent;
  let fixture: ComponentFixture<PokemonLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
