import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';
import { Group } from 'src/app/shared/models/group';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  @Input() grouplist: any = [];
  done: any = [];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    const filter = this.done.filter(
      (res: Group) => res.name === this.grouplist[event.previousIndex].name
    );
    const item = this.grouplist[event.previousIndex];
    if (filter.length == 0) {
      this.getDetail(item.id, event.previousIndex);
    }
  }

  getDetail(id: number, index: number) {
    this.groupService.getGroupDetail(id).subscribe((response: any) => {
      const employees = response.map((res: Employee) => {
        return {
          ...res,
          select: true,
        };
      });

      const item: Group = {
        ...this.grouplist[index],
        list: employees,
        allComplete: true,
      };
      this.done.push(item);
    });
  }

  updateAllComplete(index: number) {
    const item: Group = this.done[index];
    item.allComplete = item.list != null && item.list.every((t) => t.select);
  }

  someComplete(index: number): boolean {
    const item: Group = this.done[index];
    if (item.list == null) {
      return false;
    }
    return item.list.filter((t) => t.select).length > 0 && !item.allComplete;
  }

  setAll(select: boolean, index: number) {
    const item: Group = this.done[index];

    item.allComplete = select;
    if (item.list == null) {
      return;
    }
    item.list.forEach((t) => (t.select = select));
  }

  showInfo() {
    const select: any = [];
    this.done.map((res: Group) => {
      select.push(res.list?.filter((res) => res.select)[0]);
    });
    console.log(select);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const filter: any[] = this.grouplist.filter((res: Group) =>
      res.name.includes(filterValue)
    );
    if (filter.length >= 1) {
      this.grouplist = filter;      
    }
  }
}
