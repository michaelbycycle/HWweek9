function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background(51, 246, 255 );
    textSize(22)
    text("Happy Easter!", 10,80);
    textSize(30)
    text("Michael Wade", 10,120);

    //head
    fill(251, 237, 168 );
    circle(250,200,175);

    //eyes
    circle(220, 190, 40);
    circle(280, 190, 40);

    //inner eyes
    point(222,192);
    point(282,192);

    //nose
    triangle(240, 220, 250, 210, 260, 220);

    //mouth
    ellipse(250,240,50,20);


    //body
    line(250, 290, 250, 420);

    //legs
    fill(10, 24, 120);
    rect(225,340,50,90);
    fill(10, 24, 120);
  







}