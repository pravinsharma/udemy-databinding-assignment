import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlEvenComponent } from './game-control-even.component';

describe('GameControlEvenComponent', () => {
  let component: GameControlEvenComponent;
  let fixture: ComponentFixture<GameControlEvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameControlEvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
