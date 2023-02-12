
function setup() 
{
  createCanvas(400, 400);
  box = new Box(200,100,20,20,2,1);
}

function draw() 
{
  background(220);
  box.show();
  box.move();
  box.moveup();
}

