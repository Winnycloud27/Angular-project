import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerinfo } from './footerinfo';

describe('Footerinfo', () => {
  let component: Footerinfo;
  let fixture: ComponentFixture<Footerinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerinfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
