import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  subTasks: any = [];
  id: any;

  createTask(inputVar: any) {
    console.log(inputVar);
    this.subTasks.push(
      {
        listId: this.id,
        task: inputVar
      }
    );
    localStorage.setItem('SubTasks', JSON.stringify(this.subTasks));
    this.router.navigate(['/lists']);
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['listId'];
    let localData = localStorage.getItem('SubTasks');
    if(localData == null) {
      localData = ''
    }
    this.subTasks = JSON.parse(localData);
    console.log(this.subTasks);
    

  }

}
