
/* @pjs transparent="true"; */
float mx;
float my;
float easing = 0.01;
int radius = 24;
int edge = 100;
int inner = edge + radius;

void setup () {
  
  size (window.innerWidth, window.innerHeight);
  background(0,0);
  noStroke();
  
  
}

void draw() {
  
 background(0,0);
 
 if (abs(mouseX - mx) > 0.1) {
          mx = mx + (mouseX - mx) * easing;
        }
        if (abs(mouseY - my) > 0.1) {
          my = my + (mouseY- get_Scroll_Top() - my) * easing;
        }
  
  mx = constrain(mx, inner, width - inner);
  my = constrain(my, inner, height - inner);
 
  translate(mx + 0, my + 0);
  fill(0);
  stroke(0);
  strokeWeight(0.5);
  float durchmesser = random (10,120);
  beginShape();
  vertex(40, 0);
  vertex(60, 90);
  vertex(durchmesser, 120);
  vertex(65,0);
 
 endShape(CLOSE);
  
 
  
 
 if (mousePressed) {
    // zeichne eine ellipse an der Mausposition
fill(255);
   rotate(my);
    beginShape();
      vertex(40, 0);
      vertex(60, 90);
      vertex(durchmesser, 120);
      vertex(65,0);
 background(0);
 endShape(CLOSE);
  }
 
  
 }
 




