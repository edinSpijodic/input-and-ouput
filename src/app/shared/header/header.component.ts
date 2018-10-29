import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerCourse: string;
  @Input() headerStudent: string;
  @Input() headerTeacher: string;

  @Input () courseButtonName: string;
  @Input () studentButtonName: string;
  @Input () teacherButtonName: string;

  @Output() courseClicked = new EventEmitter();
  @Output() studentClicked = new EventEmitter();
  @Output() teacherClicked = new EventEmitter();

  @Output() courseButtonClicked = new EventEmitter();
  @Output() studentButtonClicked = new EventEmitter();
  @Output() teachertButtonClicked = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  courseClickedEvent() {
    this.courseClicked.emit(this.headerCourse);
  }
  studentClickedEvent() {
    this.studentClicked.emit(this.headerStudent);
  }
  teacherClickedEvent() {
    this.teacherClicked.emit(this.headerTeacher);
  }

  courseButtonClickedEvent() {
    this.courseButtonClicked.emit();
  }
  studentButtonClickedEvent() {
    this.studentButtonClicked.emit();
  }
  teacherButtonClickedEvent() {
    this.teachertButtonClicked.emit();
  }

}
