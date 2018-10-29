import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';

@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  headerValue = 'Courses';
  courseButtonValue = 'Click me';
  courses: CourseModel[];

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'name', 'location'];
  dataSource: MatTableDataSource<CourseModel>;
  // END DATA TABLE CONFIG

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.loadCourses();
  }

  private async loadCourses() {
    this.courses = await this.courseService.getAllCourses();
    this.setDataSource(this.courses);
  }

  private setDataSource(courses: CourseModel[]) {
    this.dataSource = new MatTableDataSource(courses);
  }
  courseTitleSelected(headerValue) {
    console.log('Hello from: ', headerValue);
  }

  courseButtonSelected() {
  console.log('You clicked the course button');

  }

}
