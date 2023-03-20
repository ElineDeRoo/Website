function setup() {
    createCanvas(400, 400);
}

function draw() {
    noStroke();
    // schuin been
    fill('darkgray');
    push();
    translate(115, -40)
    rotate(radians(40))
    rect(100, 130, 20, 60, 20)
    translate(120, 190)
    rotate(radians(180))
    rect(0, 0, 40, 20, 20)
    pop();
    // lichaam
    fill('#C0C0C0');
    rect(100, 100, 120, 60, 60);

    // linkse oor
    fill('gray')
    push();
    translate(10, 75)
    rotate(radians(-40))
    ellipse(80, 30, 50, 30)
    pop();

    // hoofd
    fill('#C0C0C0');
    circle(110, 70, 70)

    // halsband 
    fill('gold');
    push();
    translate(-28, 40)
    rotate(radians(-15));
    rect(105, 95, 45, 10, 5);
    pop();

    // rechtse oor
    fill('gray')
    push();
    translate(55, -80)
    rotate(radians(45))
    ellipse(150, 30, 50, 30)
    pop();

    // rechtse oog
    fill('darkgray')
    circle(115, 55, 18)
    fill('black')
    circle(115, 55, 11)
    fill('white')
    circle(114, 53, 4)

    // linkse oog
    fill('darkgray')
    circle(90, 55, 18)
    fill('black')
    circle(90, 55, 11)
    fill('white')
    circle(89, 53, 4)

    // neus
    fill('gray')
    ellipse(85, 82, 40, 35)
    fill('black')
    circle(80, 75, 10)
    stroke('black')
    strokeWeight(3)
    line(80, 80, 80, 85);
    line(80, 85, 85, 90);
    line(80, 85, 75, 90);

    // rechte benen
    noStroke();
    fill('darkgray');
    rect(120, 135, 20, 60, 20);
    rect(185, 135, 20, 60, 20);
    rect(100, 180, 40, 20, 20);
    rect(165, 180, 40, 20, 20);
    fill('black')
    circle(130, 145, 12)
    circle(195, 145, 12)
    fill('darkgray')
    circle(130, 145, 6)
    circle(195, 145, 6)

    // staart
    stroke('gray')
    strokeWeight(8)
    line(212, 117, 238, 75);
    noStroke();
    fill('red');
    circle(238, 75, 20);

    // aan-uit knop
    fill('gray');
    circle(110, 125, 18);
    fill('white');
    circle(110, 125, 12);
    fill('gray');
    circle(110, 125, 8);
    stroke('white');
    strokeWeight(3);
    line(110, 125, 110, 118);
}