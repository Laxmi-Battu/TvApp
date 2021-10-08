import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderMenuComponent } from './header-menu.component';
import {FormsModule} from '@angular/forms';
describe('HeaderMenuComponent', () => {
  let component: HeaderMenuComponent;
  let fixture: ComponentFixture<HeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuComponent ],
      imports: [RouterTestingModule,
               FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should call onSubmit ", () => {
    spyOn(component, "onSubmit").and.callThrough();
    component.onSubmit({'value':{'searchTxt':'test'}});
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
