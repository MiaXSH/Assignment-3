
// var tada;
// var button;
// var button2;
// var string = 'hello';
// var numberOfClicks = 0;
let textInput;
var testTypefaceButton;
var restartButton;

var text1;
var typeface1;
var text2;
var typeface2;

let typefaces = ['Helvetica','Arial', 'Arial Black', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Impact', 'Gill Sans', 'Times New Roman', 'Georgia', 'Palatino', 'Baskerville', 'Andalé Mono', 'Courier', 'Lucida', 'Monaco', 'Bradley Hand', 'Brush Script MT', 'Luminari', 'Comic Sans MS'];


function centreTextBox(){
    var x = (windowWidth - 400) / 2;
    var y = (windowWidth - 15) / 3;
    textInput.position(x,200);
}

function centreTypefaceButton(){
    var x = (windowWidth - 400) / 2;
    testTypefaceButton.position(x,230);

}

function centreRestartButton(){
    var x = (windowWidth - 400) / 2;
    restartButton.position(x,260);
}

function setup(){
    // createCanvas(windowWidth, windowHeight);
    //textbox
    // var textboxSize = windowWidth/1.49;
    textInput = createInput("Enter Text Here!");
    textInput.size(400,15);
    centreTextBox();

    //typeface button
    testTypefaceButton = createButton('Test Typefaces');
    testTypefaceButton.size(410);
    centreTypefaceButton();

    testTypefaceButton.mousePressed(testTypeface);

    //restart button
    restartButton = createButton('Restart');
    restartButton.size(410);
    centreRestartButton();
    restartButton.mousePressed(restart);


    //textbox width
    textboxWidth = windowWidth/1.5;

    //text1
    text1 = createP("");
    text1.position(20, 340);    
    // text1.size(400,150);

    //typeface2
    text2 = createP("");
    text2.position(20, 500);
    // text2.size(400,150);


    //typefamily display
    typeFamily1 = createP("").id("typeFamily");
    typeFamily1.position(20,340);

    typeFamily2 = createP("").id("typeFamily");
    typeFamily2.position(20,500);

}

function windowResized() {
    centreTextBox();
    centreTypefaceButton();
    centreRestartButton();

}

function restart(){
    textInput.value('Enter Text Here!');
    text1.html('');
    text2.html('');

    typeFamily1.html('');
    typeFamily2.html('');


}

function testTypeface(){
    typeface1 = random(typefaces);
    typeface2 = random(typefaces);

    if(typeface2===typeface1){
        typeface2 = random(typefaces);
    }

    var userInput = textInput.value();
    text1.html(userInput);
    text1.style('font-family', typeface1);
    typeFamily1.html(typeface1);
    typeFamily1.style('font-size', '16px');
    // typeFamily1.position(20,358);


    text2.html(userInput);
    text2.style('font-family', typeface2);
    typeFamily2.html(typeface2);
    typeFamily2.style('font-size', '16px');
    // typeFamily2.position(20,518);
}




//reference:
//https://www.w3schools.com/html/html_paragraphs.asp
//https://www.w3schools.com/cssref/pr_text_white-space.php
// random: https://p5js.org/examples/calculating-values-random/
// id(): https://p5js.org/examples/calculating-values-random/
// style(): https://p5js.org/reference/p5.Element/style/
// textStyle(): https://p5js.org/reference/p5/textStyle/
// html() - adding instead of replacing: https://p5js.org/reference/p5.Element/html/
// array: https://p5js.org/reference/p5/Array/
//font: https://p5js.org/reference/p5/p5.Font/
//Input and Button: https://p5js.org/examples/input-elements-input-button/
// creat a paragraph in html: https://p5js.org/reference/p5/createP/
// position the object at the centre of the window:https://github.com/processing/p5.js/wiki/Positioning-your-canvas
//position(): https://p5js.org/reference/p5.Element/position/
//createInput(): https://p5js.org/reference/p5/createInput/
// web safe font lists: https://blog.hubspot.com/website/web-safe-html-css-fonts





// function setup(){
//     createCanvas(600, 600);
//     tada = createAudio('mysound.mp3');

//     button = createButton('click me');
//     button.position(49,153);
//     button.hide();

//     button2=createButton('no, click me');
//     button2.position(200,10);
//     button2.hide();
//     button2.mousePressed(function(){
//         button2.hide();
//         button.show();
//         numberOfClicks++;
//         sillything();
//     });
    
//     // button3.mousePressed(sillything);


//     button.mousePressed(function(){
//         // tada.play();
//         button2.show();
//         button.hide();
//         numberOfClicks++;
//         sillything();

//     });

//     // button.hide();

    
// }

// function draw(){
//     background(100);
    
//     if(mouseIsPressed){
//         background(150);
//         // tada.play();  //if keep pressing, keep playing
//     }
//     ellipse(mouseX,mouseY,10,10);
//     text(numberOfClicks, 100, 100);
// }
// //global callback
// function mousePressed(){
//     // tada.play(); //only play once for one press, will not keep playing if keep pressing


// }

// //another callback
// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
//     button.show();
// }

// function sillything(){
//     numberOfClicks++;
//     if(numberOfClicks > 10){
//         tada.play();
//     }
// }


