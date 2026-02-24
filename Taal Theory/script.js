// PARTICLE BACKGROUND
const canvas=document.createElement("canvas");
document.body.appendChild(canvas);
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

let particles=[];
for(let i=0;i<120;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#00f5ff";
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
p.y+=0.4;
if(p.y>canvas.height)p.y=0;
});
requestAnimationFrame(animate);
}
animate();

function toggleMusic(){
let music=document.getElementById("bgMusic");
music.volume=0.2;
if(music.paused){music.play();}
else{music.pause();}
}