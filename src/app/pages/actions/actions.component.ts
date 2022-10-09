import { Component, OnInit } from '@angular/core';
import { IAction, IActionResponse } from 'src/app/shared/interfaces/actions/action.interface';
import { ActionService } from 'src/app/shared/services/action/action.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

public userActions: Array<IActionResponse> = [];

  constructor(
    private actionService: ActionService) { }

  ngOnInit(): void {
    this.getActions();
  }

  getActions(): void {
    this.actionService.getAll().subscribe(data => {
        this.userActions = data;
      });
    
   
  }


}
