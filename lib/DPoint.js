class DPoint {
    consturctor(pos,vel,acc,radius,color,label){

        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
        this.radius = radius;
        this.color = color;
        this.label = label || "";
    }

    draw(context){
        context.beginPath();
        context.strokeStyle = "blue";
        context.fillStyle = this.color;
        context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
        context.fillStyle = "black";
        context.font = "12px Arial";
        context.fillText(this.label, this.pos.dx-20, this.pos.dy-this.radius-10);
      }
}

