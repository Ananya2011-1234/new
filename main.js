canvas=
  document.getElementById("mycanvas");
ctx= canvas.getcontext("2d");

ctx.beginpath();
ctx.strokestyle = "red";
ctx.linewidth - 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="blue";
ctx.linewidth - 1;
ctx.arc(200,100,40,0,2 * Math.PI);
ctx.stroke();