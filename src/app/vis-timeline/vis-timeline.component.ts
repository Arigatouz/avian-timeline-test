import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import * as vis from 'vis-timeline/standalone';

@Component({
  selector: 'app-vis-timeline',
  templateUrl: './vis-timeline.component.html',
  styleUrls: ['./vis-timeline.component.scss'],
})
export class VisTimelineComponent implements OnInit, AfterViewInit {
  title = 'avian-timeline-test';
  @ViewChild('visualization') visualization: ElementRef = new ElementRef(null);
  date = new Date();
  name: string = 'ALi';
  testArray = [1, 2, 3, 4, 5];
  items = new vis.DataSet([
    {
      id: 1,
      content: this.templateRef(
        1,
        '2023-03-29:01:00:00',
        '2023-04-05:05:00:00'
      ),
      start: new Date('2023-03-29:01:00:00'),
      end: new Date('2023-04-05:05:00:00'),
      className: 'style',
      description: 'this is a description 1',
    },
    {
      id: 2,
      content: 'Malek',
      start: new Date('2023-04-03'),
      end: new Date('2023-04-07'),
      className: 'style',
    },
    // {
    //   id: 3,
    //   content: 'sarhan',
    //   start: '2023-04-05',
    //   end: '2023-04-09',
    //   className: 'style',
    //   description: 'this is a description 2',
    // },
    // {
    //   id: 4,
    //   content: 'Mai',
    //   start: '2023-04-07',
    //   end: '2023-04-11',
    //   className: 'style',
    //   description: 'this is a description 3',
    // },
    // {
    //   id: 5,
    //   content: 'hassan',
    //   start: '2023-04-09',
    //   end: '2023-04-15',
    //   className: 'style',
    //   description: 'this is a description 4',
    // },
    // {
    //   id: 6,
    //   content: 'fady',
    //   start: '2023-04-13',
    //   end: '2023-04-17',
    //   className: 'style',
    //   description: 'this is a description 5',
    // },
    // {
    //   id: 7,
    //   content: 'yasmin',
    //   start: '2023-04-15',
    //   end: '2023-04-19',
    //   className: 'style',
    //   description: 'this is a description 6',
    // },
  ]);
  constructor(private router: Router) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    const container = this.visualization.nativeElement;
    const options: vis.TimelineOptions = {
      //editable: true,
      // start: new Date('2023-03-29:01:00:00'),
      // end: new Date('2023-04-05:05:00:00'),
    };
    const timeline = new vis.Timeline(container, this.items, options);
    timeline.on('itemover', (properties) => {
      // console.log(properties);
      //create a tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerHTML = properties.item;
      //position the tooltip correctly based on the mouse position?
      const x = properties.event.clientX;
      const y = properties.event.clientY;
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
      tooltip.style.width = '200px';
      tooltip.style.height = '200px';
      tooltip.style.backgroundColor = 'white';
      tooltip.style.border = '1px solid black';
      tooltip.style.borderRadius = '5px';
      tooltip.style.padding = '5px';
      tooltip.style.position = 'absolute';
      tooltip.style.zIndex = '1000';
      //add tooltip to DOM (beneath the timeline)
      container.appendChild(tooltip);
    });
    timeline.on('itemout', (properties) => {
      //remove the tooltip when the mouse leaves the item
      const tooltip = document.querySelector('.tooltip');
      container.removeChild(tooltip);
    });
    timeline.on('select', (properties) => {
      console.log(this.items.get(properties.items));
    });
    timeline.on('click', (properties) => {
      if (properties.item) {
        console.log('click');
        const item = this.items.get(properties.items);
        this.router.navigate(['details']);
      }
    });
  }

  templateRef(id: number, start: string, end: string) {
    return `
    <div>
      ${this.getImages()}
    </div>
    <div>
      <p>case id = ${id}</p>
      <p>${this.name}</p>
      <p>start date : ${start}</p>
      <p>end date : ${end}</p>
    </div>
  `;
  }
  getImages() {
    return this.testArray
      .map((item) => {
        return `<img src="https://picsum.photos/200/300?random=${item}" | secure >`;
      })
      .join('');
  }
}
