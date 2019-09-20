const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];

let maxPoints = 10;

for(let i = 0; i< maxPoints ; i++){
    let ball = new Point (new Vector2d(getRandom(width),getRandom(height)),30,"red");
    balls.push(ball);
}

function animate(){
    requestAnimationFrame;
    for(let i =0; i<balls.length;i++){
        balls[i].draw(context);
    }
}


window.addEventListener('click', (evt)=>{
    let mouseVector = new Vector2d(evt.clientX, evt.clientY);
    for(i =0; i<balls.length; i++){
        let distanceMouseBall = new Vector2d(0,0);
        
        distanceMouseBall.differenceVector(mouseVector, balls[i].position);
        console.log(distanceMouseBall.magnitude)
        if(distanceMouseBall.magnitude <30){
            balls[i].color = "green";
            balls[i].draw(context);
        }
    }
})


animate();


function getRandom(max){
    let anwser = Math.floor(Math.random()*max);
    return anwser;
}
