import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHijoComponent } from './chat-hijo.component';

describe('ChatHijoComponent', () => {
  let component: ChatHijoComponent;
  let fixture: ComponentFixture<ChatHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
