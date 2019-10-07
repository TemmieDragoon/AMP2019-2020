const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A = new Point(new Vector2d(200,200),15,"purple","A",true);
let B = new Point(new Vector2d(400,400),15,"red","B",true);
let l = new LinearFunction(1,1);

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    l.defineLineWithTwoPoints(A,B);
    l.draw(context);
    A.draw(context);
    B.draw(context);
}

animate();