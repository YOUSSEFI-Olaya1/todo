import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { format } from 'date-fns';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  ngOnInit() {
  }
  currentDate : string;
  myTask = '';
  addTask!: boolean;
  tasks: { key: string | null, text: any, hour: any, checked: any }[] = [];


  constructor(public afDB: AngularFireDatabase,) {
      // const date = new Date();
      // this.currentDate = date.toLocaleDateString();
      const date = new Date();
      this.currentDate = new Date().toISOString();
      this.currentDate = format(date,'EEEE-dd-MMMM');
      this.getTasks();
  }
  getTasks() {
    this.afDB.list('Tasks/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => {
        this.tasks.push({
          key: action.key,
          text: action.payload.exportVal().text,
          hour: action.payload.exportVal().date.substring(11, 16),
          checked: action.payload.exportVal().checked
        });
      });
    });
  }
  addTaskToFirebase() {
   this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    });
    this.showForm();
   // console.log("mytask : " + this.myTask);
  }
  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }
  changeCheckState(ev: any) {
    console.log('checked: ' + ev.checked);
    this.afDB.object('Tasks/' + ev.key + '/checked/').set(ev.checked);
  }

  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }
}


