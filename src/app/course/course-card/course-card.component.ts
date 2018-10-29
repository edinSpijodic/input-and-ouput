import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CourseModel } from '../core/course.model';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, OnDestroy {

  @Input() course: CourseModel;

  @Output() titleClicked = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  titleClickedEvent() {
    this.titleClicked.emit(this.course.name);
  }


  ngOnDestroy() {
    console.log('Kraj jedne angular komponente :((((((((');
    this.titleClicked.unsubscribe();
  }
}
