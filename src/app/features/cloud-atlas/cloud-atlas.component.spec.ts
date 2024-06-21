import { TestBed } from '@angular/core/testing';
import { CloudAtlasComponent } from './cloud-atlas.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAtlasComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CloudAtlasComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
