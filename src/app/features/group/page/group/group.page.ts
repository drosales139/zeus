import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss']
})
export class GroupComponentPage implements OnInit {

  allGroups$:BehaviorSubject<[]> = new BehaviorSubject([])

  constructor(private groupService: GroupService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.groupService.getAllGroups().subscribe((response:any)=>{
      this.allGroups$.next(response)
    })
  }

}
