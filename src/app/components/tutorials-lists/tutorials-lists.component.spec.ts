import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsListsComponent } from './tutorials-lists.component';

describe('TutorialsListsComponent', () => {
  let component: TutorialsListsComponent;
  let fixture: ComponentFixture<TutorialsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
