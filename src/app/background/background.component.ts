import { Component, OnInit } from '@angular/core';
import { RouterOutlet  } from '@angular/router';
import {slideInAnimation} from '../animations'


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  ngOnInit(): void {
    var WIDTH;
    var HEIGHT;
    var canvas;
    var con;
    var g;
    var pxs = new Array();
    var rint = 50;

    $(document).ready(function () {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;
      $('#container').width(WIDTH).height(HEIGHT);
      canvas = document.getElementById('pixie');
      $(canvas).attr('width', WIDTH).attr('height', HEIGHT);
      con = canvas.getContext('2d');
      for (var i = 0; i < 100; i++) {
        pxs[i] = new Circle();
        pxs[i].reset();
      }
      setInterval(draw, rint);
      // setInterval(draw,rint2);
    });

    function draw() {
      con.clearRect(0, 0, WIDTH, HEIGHT);
      for (var i = 0; i < pxs.length; i++) {
        pxs[i].fade();
        pxs[i].move();
        pxs[i].draw();
      }
    }

    function Circle() {
      this.s = {
        ttl: 8000,
        xmax: 5,
        ymax: 2,
        rmax: 10,
        rt: 1,
        xdef: 960,
        ydef: 540,
        xdrift: 4,
        ydrift: 4,
        random: true,
        blink: true,
      };

      this.reset = function () {
        this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;
        this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;
        this.r = (this.s.rmax - 1) * Math.random() + 1;
        this.dx = Math.random() * this.s.xmax * (Math.random() < 0.5 ? -1 : 1);
        this.dy = Math.random() * this.s.ymax * (Math.random() < 0.5 ? -1 : 1);
        this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
        this.rt = Math.random() * this.hl;
        this.s.rt = Math.random() + 1;
        this.stop = Math.random() * 0.2 + 0.4;
        this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
        this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
      };

      this.fade = function () {
        this.rt += this.s.rt;
      };

      this.draw = function () {
        if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl))
          this.s.rt = this.s.rt * -1;
        else if (this.rt >= this.hl) this.reset();
        var newo = 1 - this.rt / this.hl;
        con.beginPath();
        con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        con.closePath();
        var cr = this.r * newo;
        g = con.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          cr <= 0 ? 1 : cr
        );
        g.addColorStop(0.0, 'rgba(238,180,28,' + newo + ')');
        g.addColorStop(this.stop, 'rgba(238,180,28,' + newo * 0.2 + ')');
        g.addColorStop(1.0, 'rgba(238,180,28,0)');
        con.fillStyle = g;
        con.fill();
      };

      this.move = function () {
        this.x += (this.rt / this.hl) * this.dx;
        this.y += (this.rt / this.hl) * this.dy;
        if (this.x > WIDTH || this.x < 0) this.dx *= -1;
        if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
      };

      this.getX = function () {
        return this.x;
      };
      this.getY = function () {
        return this.y;
      };
    }

    //mouseMove
    document.addEventListener('mousemove', e=> {
      let bubles = document.createElement('div');
      let background = document.getElementById('container');
      let x = e.pageX;
      let y = e.pageY;
      
      bubles.style.pointerEvents = "none";
      bubles.style.boxShadow= "10px 10px 30px rgb(190, 175, 52), -5px -5px 10px rgb(190, 175, 52)";
      bubles.style.transform= "translate(-50%, -50%)";
      bubles.style.filter= "blur(2px)";
      bubles.style.borderRadius = "100%"
      bubles.style.left = x + "px";
      bubles.style.top = y + "px";
      bubles.style.zIndex = "500";
      bubles.style.background= "rgb(170, 170, 22)";
      bubles.style.position="absolute"
      let size = Math.random() * 10;
      bubles.style.width = 1 + size + "px";
      bubles.style.height = 1 + size + "px";
      document.getElementById('container').appendChild(bubles);
      setTimeout(function() {
        bubles.remove();
      }, 200);
    });
  }

}
