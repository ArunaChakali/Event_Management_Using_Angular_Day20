import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirectiveDirective } from '../../Directives/highlight-directive.directive';
import { PriceFormatPipePipe } from '../../Pipes/price-format-pipe.pipe';

@Component({
  selector: 'app-event-list-component',
  imports: [NgFor, PriceFormatPipePipe, HighlightDirectiveDirective],
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.scss']
})
export class EventListComponentComponent {

  events = [
    { name: 'Global Business Leaders Summit', date: '2025-09-25', price: 5500, category: 'Conference' },
    { name: 'Cybersecurity & Data Privacy Forum', date: '2025-10-08', price: 4800, category: 'Seminar' },
    { name: 'Digital Marketing Masterclass', date: '2025-10-20', price: 3500, category: 'Workshop' },
    { name: 'Artificial Intelligence & Robotics Expo', date: '2025-11-15', price: 6200, category: 'Expo' },
    { name: 'Finance & Investment Strategies Summit', date: '2025-12-05', price: 5000, category: 'Conference' },
    { name: 'Summer Food Festival', date: '2025-06-18', price: 1500, category: 'Festival' },
    { name: 'Yoga & Wellness Retreat', date: '2025-07-22', price: 3200, category: 'Workshop' },
    { name: 'International Film Screening', date: '2025-08-30', price: 900, category: 'Screening' },
    { name: 'Tech Startups Pitch Night', date: '2025-09-10', price: 2800, category: 'Conference' },
  ];
    

}
