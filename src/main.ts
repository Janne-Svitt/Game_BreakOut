import "./style.css";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
canvas?.style.setProperty("border", "10px solid #000000");

ctx?.beginPath();
ctx?.rect(20, 40, 50, 50);
ctx!.fillStyle = "#FF0000";
ctx?.fill();
ctx?.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.strokeStyle = "rgb(0 255 0 / 50%)";
ctx.stroke();
ctx!.fillStyle = "#FF0000";
ctx?.fill();
ctx.closePath();
