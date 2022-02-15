import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private route: Router) { }
  TaskList: any;

  ngOnInit(): void {
    let lists = localStorage.getItem('TaskList');

    if (lists == null) {
      lists = '';
    }
    
    // console.log(lists.split(','));


    this.TaskList = lists.split(',');
    console.log(this.TaskList);
  }

  createNewList(FormData: any) {

    this.TaskList.push(FormData);
    console.log(FormData);

    localStorage.setItem('TaskList', this.TaskList);
    this.route.navigate(['/lists']);
  }

}
