import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.css']
})
export class ViewBoardDialogComponent {
  title: string = '';
  tasks: Array<String> = [""];
  tasksLoop: any = [false];

  constructor(
    private dialogRef: MatDialogRef<ViewBoardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public boardService: BoardService,
    private _snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    let a = this.data;
  }


  deleteTask(i: number) {

  }

  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  close() {
    this.dialogRef.close();
  }

  create() {
    if (this.tasks.some((element: String) => element === "")) {
      this._snackBar.open("Yeni Taskı Giriniz", "Ok");
    }
    else {
      this.boardService.boards[this.data.boardIndex].cards.push({
        title: this.title,
        checklist: this.tasks,
        status: this.tasksLoop
      });
      this.boardService.updateDataToLocaleStorage();
      this.close();
    }

  }
}
