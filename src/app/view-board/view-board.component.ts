import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent {
  boardIndex: any = 0;
  boardTitle:string = "";
  constructor(private matDialog:MatDialog,private route:ActivatedRoute, public boardService:BoardService){}

  ngOnInit(): void {
    this.boardIndex=this.route.snapshot.paramMap.get('boardIndex');
    this.boardTitle = this.boardService.boards[this.boardIndex].title;
  }

  openNewCardDialog() {
    const dialogRef = this.matDialog.open(ViewBoardDialogComponent, {
      width:'500px',
      data: {boardIndex: this.boardIndex}
    });
  }

  deleteCard(indexCard:number) {

  } 

  editCard(indexCard:number,card:any) {

  }
}
