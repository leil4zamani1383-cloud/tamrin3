import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTemplat } from './private-templat';

describe('PrivateTemplat', () => {
  let component: PrivateTemplat;
  let fixture: ComponentFixture<PrivateTemplat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateTemplat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateTemplat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
