var a, b, c, cImg;
var gs = 1;
var s1, s2, s3;

function preload() {
    //load images, animations & sound files
    cImg = loadImage("penny.png");
}

function setup() {
    //one-time events 
    createCanvas(400, 400);

    a = createSprite(100, 200, 40, 40);
    b = createSprite(350, 200, 30, 30);
    b.velocityX = -2;

    for (var i = 50; i < 350; i = i + 20) {
        c = createSprite(i, 70, 10, 10);
        c.addImage(cImg);
        c.scale = 0.01;
    }

    s1 = new sample(50,100);
    s2 = new sample(20,20);
    
}

function draw() {
    //events occur in a loop
    background(0);

    if (frameCount % 20 === 0) {
        r = Math.round(random(1, 3));
        switch (r) {
            case 1: a.shapeColor = "blue";
                break;
            case 2: a.shapeColor = "yellow";
                break;
            default: a.shapeColor = "white";
                break;
        }
    }
    

    s1.display();
    s2.display();
    test(40,100);

    if(gs === 2){
        background("lightblue");
        textSize(20);
        fill("darkblue");
        text("You are now in the 2nd game state" + 34,50,300);
        gs = 3;
    }

    if(a.shapeColor === "yellow" && gs === 3){
        a.width = b.width;
        a.height = b.height;
    }
    else{
        a.width = 40;
        a.height = 40;
    }

    drawSprites();
}

function test(x,y){
    if(b.isTouching(a)){
        b.velocityX = 0;
        b.shapeColor = "pink";
        b.width = x;
        b.height = y;
        gs = 2;
    }
}