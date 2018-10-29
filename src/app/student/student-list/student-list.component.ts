import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  headerStudents = 'Students';
  studentButtonValue = 'Show ';
  students: StudentModel[];

  @Output() studentButtonClicked = new EventEmitter();

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'email'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  private async loadStudents() {
    this.students = await this.studentService.getAllStudents();
    this.setDataSource(this.students);
  }

  private setDataSource(students) {
    this.dataSource = new MatTableDataSource(students);
  }

  studentTitleSelected(x) {
    console.log('Hi from: ', x);
  }

  studentButtonSelected() {
    console.log('You clicked the Students button');
    }
}
