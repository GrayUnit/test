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

  // Permet de vérifier que le component est bien instancié
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Recréation du WebComponent
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Permet de vérifier que les attributs du composants sont bien initialisés
  it(`should have as title 'basic-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('basic-app');
  });

  // Permet de vérifier que le template du composant s'affiche correctement
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('basic-app app is running!');
  });
});
