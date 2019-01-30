import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlOddComponent } from './game-control-odd.component';

describe('GameControlOddComponent', () => {
  let component: GameControlOddComponent;
  let fixture: ComponentFixture<GameControlOddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameControlOddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
