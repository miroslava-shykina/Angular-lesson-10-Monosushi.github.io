import { Component, OnInit } from '@angular/core';
import { ActionService } from '../shared/services/action/action.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public focus!: true;

  constructor(private actionService: ActionService) {}

  ngOnInit(): void {}
}
