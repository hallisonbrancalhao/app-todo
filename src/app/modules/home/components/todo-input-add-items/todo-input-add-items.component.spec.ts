import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddItemsComponent } from './todo-input-add-items.component';

describe('TodoInputAddItemsComponent', () => {
  let component: TodoInputAddItemsComponent;
  let fixture: ComponentFixture<TodoInputAddItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoInputAddItemsComponent]
    });
    fixture = TestBed.createComponent(TodoInputAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
