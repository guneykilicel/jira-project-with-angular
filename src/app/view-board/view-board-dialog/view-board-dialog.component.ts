import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.css']
})
export class ViewBoardDialogComponent {
  title: string = '';
  tasks: Array<String> = [""];
  tasksLoop: any = [false];

  constructor(private dialogRef:MatDialogRef<ViewBoardDialogComponent>) {}

  deleteTask(i:number) {

  }

  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  close() {
    this.dialogRef.close();
  }
}
