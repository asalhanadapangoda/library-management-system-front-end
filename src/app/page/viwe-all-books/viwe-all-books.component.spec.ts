import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViweAllBooksComponent } from './viwe-all-books.component';

describe('ViweAllBooksComponent', () => {
  let component: ViweAllBooksComponent;
  let fixture: ComponentFixture<ViweAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViweAllBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViweAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
