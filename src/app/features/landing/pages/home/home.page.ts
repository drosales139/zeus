import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

  images = [
    {path: 'https://picsum.photos/200/300?grayscale'},
    {path: 'https://picsum.photos/seed/picsum/200/300'},
    {path: 'https://picsum.photos/id/237/200/300'},
    {path: 'https://picsum.photos/200/300/?blur'},
    {path: 'https://picsum.photos/id/870/200/300?grayscale&blur=2'},
]

  constructor(){}

  ngOnInit(): void {}
  
}
