import React, { useRef, useEffect } from "react";
import p5 from "p5";

const VectorFieldAnimation: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let cols: number;
      let rows: number;
      let scale = 20;
      let inc = 0.1;
      let zoff = 0;
      let particles: Particle[] = [];
      let flowfield: p5.Vector[] = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(
          sketchRef.current!
        );
        cols = Math.floor(p.width / scale);
        rows = Math.floor(p.height / scale);
        flowfield = new Array(cols * rows);

        for (let i = 0; i < 1000; i++) {
          particles[i] = new Particle(p);
        }
        p.background(255);
      };

      p.draw = () => {
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
          }
          yoff += inc;
          zoff += 0.0003;
        }

        for (let i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield, cols, scale);
          particles[i].update();
          particles[i].edges();
          particles[i].show();
        }
      };

      class Particle {
        p: p5;
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        maxspeed: number;
        prevPos: p5.Vector;

        constructor(p: p5) {
          this.p = p;
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.maxspeed = 2;
          this.prevPos = this.pos.copy();
        }

        follow(flowfield: p5.Vector[], cols: number, scale: number) {
          let x = Math.floor(this.pos.x / scale);
          let y = Math.floor(this.pos.y / scale);
          let index = x + y * cols;
          let force = flowfield[index];
          this.applyForce(force);
        }

        applyForce(force: p5.Vector) {
          this.acc.add(force);
        }

        update() {
          this.vel.add(this.acc);
          this.vel.limit(this.maxspeed);
          this.pos.add(this.vel);
          this.acc.mult(0);
        }

        edges() {
          if (this.pos.x > this.p.width) this.pos.x = 0;
          if (this.pos.x < 0) this.pos.x = this.p.width;
          if (this.pos.y > this.p.height) this.pos.y = 0;
          if (this.pos.y < 0) this.pos.y = this.p.height;
          this.prevPos = this.pos.copy();
        }

        show() {
          this.p.stroke(0, 5);
          this.p.strokeWeight(1);
          this.p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
          this.updatePrev();
        }

        updatePrev() {
          this.prevPos.x = this.pos.x;
          this.prevPos.y = this.pos.y;
        }
      }
    };

    const myp5 = new p5(sketch);

    return () => {
      myp5.remove();
    };
  }, []);

  return <div ref={sketchRef} className="absolute inset-0 z-0" />;
};

export default VectorFieldAnimation;
