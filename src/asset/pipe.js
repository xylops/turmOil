// different asset function could be create here in seperate js folder
function pipe() {

}
//create points from A to B
pipe.draw = function(parentsX, parentsY, parentsID , rootID){

    handle1 = game.add.sprite(parentsX, parentsY, 'pipeTip');
    handle1.anchor.set(0.5);

    handle2 = game.add.sprite(parentsX, parentsY+50, 'pipeTip');
    handle2.anchor.set(0.5);
    handle2.inputEnabled = true;
    handle2.input.enableDrag(true);

    confirm = game.add.sprite(game.world.width * 0.85, game.world.height * 0.9, 'confirm');
    confirm.anchor.setTo(0.5);
    confirm.inputEnabled = true;
    confirm.events.onInputDown.add(function(){
        pipe.digTunnel(handle1.x, handle1.y, handle2.x, handle2.y, parentsID, rootID);
        updateState = 1;
        cancel.kill();
        confirm.kill();
        handle1.kill();
        handle2.kill();
    })
    cancel = game.add.sprite(game.world.width * 0.95, game.world.height * 0.9, 'cancel');
    cancel.anchor.setTo(0.5);
    cancel.inputEnabled = true;
    cancel.events.onInputDown.add(function(){
        cancel.kill();
        confirm.kill();
        handle1.kill();
        handle2.kill();
    });
}

// dig the tunnel for the pipe
pipe.digTunnel = function(drillerStartX, drillerStartY, drillerEndX, drillerEndY, parentsID, rootID){
    numbersOfDriller ++;
    var singleDriller = drillers.create(drillerStartX, drillerStartY, 'driller');
    singleDriller.anchor.setTo(0.5);
    game.physics.enable(singleDriller,Phaser.Physics.ARCADE);
    drillerTween = game.add.tween(singleDriller).to({x:drillerEndX, y:drillerEndY},3000);
    drillerTween.start();
    drillerTween.onComplete.add(function(){
        numbersOfDriller --;
        singleDriller.kill();
        if(numbersOfDriller == 0){
            updateState = null;
        }
        pipe.createPipe(drillerStartX, drillerStartY, drillerEndX, drillerEndY, parentsID, rootID);
    })
}

pipe.createPipe = function(pipeStartX, pipeStartY, jointLocationX, jointLocationY,parentsID, rootID){

    var graphics = game.add.graphics();
    graphics.lineStyle(3, 0xafafaf);
    graphics.moveTo(pipeStartX,pipeStartY);
    graphics.lineTo(jointLocationX, jointLocationY);
    pipe.joint(jointLocationX, jointLocationY, parentsID, rootID);


}
pipe.joint = function(jointLocationX, jointLocationY, parentsID, rootID){
    numbersOfJoint ++;
    var jointName = 'joint_' + numbersOfJoint;
    var jointID = 10 + numbersOfJoint;
    oilRigArray[rootID].push([jointID, jointLocationX, jointLocationY, parentsID, rootID]);
    var singleJoint = joints.create(jointLocationX, jointLocationY, 'pipeTip');
    singleJoint.anchor.setTo(0.5);
    singleJoint.inputEnabled = true;
    singleJoint.events.onInputDown.add(function(){
        pipe.draw(jointLocationX, jointLocationY, jointID, rootID);
    })
    game.physics.enable(singleJoint, Phaser.Physics.ARCADE);
}
