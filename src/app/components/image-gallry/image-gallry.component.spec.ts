import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallryComponent } from './image-gallry.component';

describe('ImageGallryComponent', () => {
  let component: ImageGallryComponent;
  let fixture: ComponentFixture<ImageGallryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGallryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGallryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
