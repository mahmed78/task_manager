import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: any = [];
  tasks:any[]=[];
  personalTasks: any = [];
  subTasks: any = [];
  constructor(private route: ActivatedRoute, private router: Router) { }
  index: any = 0;
  


  onTaskChange(i: any) {
    this.index = i;
    this.personalTasks = this.subTasks.filter((elm: any) => {
      return elm.listId == this.index;
    })
    console.log(this.personalTasks);
    console.log(this.index);
    
  }

  ngOnInit(): void {
    // this.index = this.route.snapshot.params['listId'];

    console.log(this.index);

    this.tasks=[];
    let lists = localStorage.getItem('TaskList');

    if (lists == null) {
      lists = '';
    }

    // console.log(lists.split(','));


    this.lists = lists.split(',');
    // console.log(this.lists);
    this.lists.shift();
    console.log(this.lists);

    //////////////////////////////////////////////////////////
    let localData = localStorage.getItem('SubTasks');
    if(localData == null) {
      localData = ''
    }
    // console.log(JSON.parse(localData));
    this.subTasks = JSON.parse(localData);
    console.log(this.subTasks);

    this.personalTasks = this.subTasks.filter((elm: any) => {
      return elm.listId == this.index;
    })
    console.log(this.personalTasks);
    

  }

  navigateToNewTask() {
    this.router.navigate(['/new-task', this.index])
  }


}

