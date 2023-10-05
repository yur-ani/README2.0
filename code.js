var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e698d9b8-d1af-4497-bb8f-ab4581f2e907","d8b50831-92b4-4100-b8e7-ec9bc44517ad"],"propsByKey":{"e698d9b8-d1af-4497-bb8f-ab4581f2e907":{"name":"monstertruck","sourceUrl":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png","frameSize":{"x":394,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png"},"d8b50831-92b4-4100-b8e7-ec9bc44517ad":{"name":"building","sourceUrl":"assets/api/v1/animation-library/gamelab/Rz2WTMNLuG_yiAT27cdGhExV1mdYwHAe/category_buildings/building_17.png","frameSize":{"x":398,"y":341},"frameCount":1,"looping":true,"frameDelay":2,"version":"Rz2WTMNLuG_yiAT27cdGhExV1mdYwHAe","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":341},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Rz2WTMNLuG_yiAT27cdGhExV1mdYwHAe/category_buildings/building_17.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("monstertruck");
  sam.scale=0.1;
  sam.shapeColor = "green";
  
  store = createSprite(380, 190, 13, 13);
  store.setAnimation("building");
  store.scale=0.1;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//Agrega velocidad para hacer que el auto se mueva.
car1.velocityY=4;
car1.velocityY=-4;
car2.velocityY=4;
car2.velocityY=-4;
car3.velocityY=4;
car3.velocityY=-4;
car4.velocityY=4;
car4.velocityY=-4;

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
sam.bounce(boundary1);
sam.bounce(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if (keyDown("right")) {
  sam.x = sam.x +3;
}
if (keyDown("left")) {
  sam.x = sam.x -3;
}
if (keyDown("up")) {
  sam.y = sam.y -3;
}
if (keyDown("down")) {
  sam.y = sam.y +3;
}
//Agregar la condición de reducir la vida de Sam si toca el carro.
if (sam.isTouching(car1)|| 
sam.isTouching(car2)|| 
sam.isTouching(car3)|| 
sam.isTouching(car4)) {
  sam.x=20;
  sam.y=190;
  life = life +1;
  }
if (sam.isTouching(store)) {
  sam.x = 20;
  sam.y = 190;
  text("Ganaste",200,200);
}

 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
