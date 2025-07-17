import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footersocial } from './footersocial';

describe('Footersocial', () => {
  let component: Footersocial;
  let fixture: ComponentFixture<Footersocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footersocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footersocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
