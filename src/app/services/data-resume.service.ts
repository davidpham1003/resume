import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataResumeService {
  project = [
    {
      fw: 'Angular',
      projects: [
        {
          title: 'Booking Movies',
          des: 'Graduation Thesis at Cybersoft academy',
          use:
            'Using Angular, Boostrap4,TypeScript, Angular Material,Photoshop, Sweet alert 2 ...v.v.... with full functionality',
          funcs: [
            {name:'Users',desFunc:'register, login, change information, password, change avatar, buy tickets, watch movie information, rating on movies ...'},
            {name:'Admin',desFunc:'add movies, edit movies, add users, add administrator and add showtimes for movies'}
          ],
          link:'https://du-an-phim-80edb.web.app/'
        },
      ],
    },
    {
      fw: 'ReactJS',
      projects: [
        {
          title: 'To Do List',
          des: 'Application for Task Management  ',
          use:
            'Using ReactJS, Redux,Bootstrap 4',
          funcs: [
            {name:'Add Action',desFunc:''},
            {name:'Done and Remove Action',desFunc:''},
            {name:'Review history',desFunc:'Review the history of completed activities'}
          ],
          link:'Updating...'
        },
        {
          title: 'Test Glass',
          des: 'Application for Task Management  ',
          use:
            'Using ReactJS, Redux,Bootstrap 4',
          // funcs: [
          //   // {name:'Add Action',desFunc:''},
          //   // {name:'Done and Remove Action',desFunc:''},
          //   // {name:'Review history',desFunc:'Review the history of completed activities'}
          // ],
          link:'Updating...'
        },
      ],
    },
    {
      fw: 'Project course',
      projects: [
        {
          title: 'Uber cash register ',
          des: 'Project course at Cybersoft Academy (100/100 Mark)',
          use:
            'Boostrap4, HTML5, CSS3 and Javascript',
          // funcs: [
          //   {name:'Add Action',desFunc:''},
            // {name:'Done and Remove Action',desFunc:''},
            // {name:'Review history',desFunc:'Review the history of completed activities'}
          // ],
          link:'Updating...'
        },
        {
          title: 'Clone home page klevermedia.co.uk ',
          des: 'Project course at Cybersoft Academy (100/100 Mark)',
          use:
            'Using Boostrap4, HTML5 and CSS3',
          // funcs: [
          //   // {name:'Add Action',desFunc:''},
          //   // {name:'Done and Remove Action',desFunc:''},
          //   // {name:'Review history',desFunc:'Review the history of completed activities'}
          // ],
          link:'Updating...'
        },
        {
          title: 'Portfolio ',
          des: 'Project course at Cybersoft Academy (100/100 Mark)',
          use:
            'Using HTML, CSS',
          // funcs: [
          //   {name:'Add Action',desFunc:''},
          //   {name:'Done and Remove Action',desFunc:''},
          //   {name:'Review history',desFunc:'Review the history of completed activities'}
          // ],
          link:'Updating...'
        },
       
      ],
    },
    {
      fw: 'Freelance',
      projects: [
        {
          title: 'volamhoiuc.com',
          des: 'Design website volamhoiuc.com',
          use:
            'Using PHP, HTML, CSS with my team',
          // funcs: [
          //   {name:'Users',desFunc:'register, login, change information, password, change avatar, buy tickets, watch movie information, rating on movies ...'},
          //   {name:'Admin',desFunc:'add movies, edit movies, add users, add administrator and add showtimes for movies'}
          // ],
          link:'https://volamhoiuc.com/'
        },
      ],
    },
    
  ];
  constructor() {}
}
