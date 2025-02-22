import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ReviewCardComponent } from './review-card.component';
@Component({
  selector: 'app-host',
  template: `
    <app-review-card
      [name]="name"
      [date]="date"
      [highlightMessage]="highlightMessage"
      [message]="message"
      [rating]="rating"
    ></app-review-card>
  `,
  imports: [ReviewCardComponent],
})
class TestHostComponent {
  name = 'John Doe';
  date = 'August 30, 2024';
  highlightMessage = 'Read more';
  message = 'This is a great product!';
  rating = '5';
}

describe('ReviewCardComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewCardComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the correct name', () => {
    const nameElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(nameElement.textContent.trim()).toBe(testHost.name);
  });

  it('should display the correct date', () => {
    const dateElement = fixture.debugElement.query(
      By.css('p.text-sm'),
    ).nativeElement;
    expect(dateElement.textContent.trim()).toBe(testHost.date);
  });

  it('should display the correct message', () => {
    const messageElement = fixture.debugElement.query(
      By.css('.italic'),
    ).nativeElement;
    expect(messageElement.textContent).toContain(testHost.message);
  });

  it('should display the correct highlight message', () => {
    const highlightElement = fixture.debugElement.query(
      By.css('.text-red-500'),
    ).nativeElement;
    expect(highlightElement.textContent.trim()).toBe(testHost.highlightMessage);
  });
});
