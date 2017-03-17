var ellipse1 = 50;
var ellipse2 = 50;
var sizeOfEllipse1 = 50;
var sizeOfEllipse2 = 50;
var ellipse3 = -50;

var sizeOfEllipse3 = 50
var sizeOfEllipse31 = 50
var ellipse4 = 50

function setup() {
  resizeCanvas(500,500)
  //background('red')

  
}

//Ellipse1  
function draw() {
  
  background('red')
  
  ellipseMode(CENTER);
  
  //colorMode(HSB)
  
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(ellipse1, 250, sizeOfEllipse1, 250);
  
  ellipse1 = ellipse1 + 1;
  sizeOfEllipse1 = sizeOfEllipse1 + 1; 


//Ellipse2
   
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(250, ellipse2, 250, sizeOfEllipse2);
  
  ellipse2 = ellipse2 + 1;
  sizeOfEllipse2 = sizeOfEllipse2 + 1;
  
//Ellipse3

 fill(random(0, 255), random(0, 255), random(0, 255));
 ellipse(ellipse3,250, sizeOfEllipse3, 250);
 
 ellipse3 = ellipse3 + 1
 sizeOfEllipse3 = sizeOfEllipse3 + 1 
 
 if( ellipse1 < width ){ 
  ellipse1 = -1
}
  //Ellipse4
  //fill(random(0, 255), random(0, 255), random(0, 255));
  //ellipse(50,ellpipe4,50,50)
  
  //ellpeipe4 = 50 = 1
}





  