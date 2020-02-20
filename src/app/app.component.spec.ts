import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Visualisateur UML'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Visualisateur UML');
  });

    // On test si le tableau n'est pas visible
    it('le tableau du diagramme ne doit pas être visible', () => {
      const fixture = TestBed.createComponent(AppComponent);
      // Variable qui pointe vers le HTML 
      const elementHtml = fixture.debugElement.nativeElement;
      // le tableau du diagramme ne doit pas être visible
      expect(elementHtml.querySelector('#diagramme')).toBeUndefined;
    });

});
