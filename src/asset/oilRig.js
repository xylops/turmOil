function oilRig(){
}

oilRig.drawRig = function(){

    demoPump = game.add.sprite(pumpBtn.x,pumpBtn.y, 'pump');
    demoPump.anchor.setTo(0.5, 1);
    demoPump.scale.setTo(0.5);

    if(demoPump.y < floorLevel){
        demoPumpTween = game.add.tween(demoPump).to({x:demoPump.x, y:floorLevel},500);
        demoPumpTween.start();
        demoPumpTween.onComplete.add(function(){
            oilRig.createRig();

        })
    }else{
        demoPump.kill();
    }

    //kill the dragged btn;
    pumpBtn.kill();
    //create button for UI
    pumpBtn = game.add.sprite(game.world.width*0.95, game.world.height*0.4, 'pump');
    pumpBtn.anchor.setTo(0.5, 1);
    pumpBtn.scale.setTo(0.5);
    pumpBtn.inputEnabled = true;
    pumpBtn.input.enableDrag();
    pumpBtn.input.enableSnap(20,20, false, true);
    pumpBtn.events.onInputUp.add(function(){
        oilRig.drawRig();
    });

}

oilRig.createRig = function(){
    numberOfOilRig ++
    var oilRigName = 'oilRig_'+numberOfOilRig;
    var oilRigID = numberOfOilRig - 1;
    var oilRigLevel = 1;
    oilRigArray.push([oilRigName,oilRigID, oilRigLevel, demoPump.x, demoPump.y]);
    var oilRig = game.add.sprite(demoPump.x,demoPump.y, 'pump')
    oilRig.anchor.setTo(0.5,1);
    oilRig.scale.setTo(0.5);
    oilRig.inputEnabled = true;
    oilRig.events.onInputDown.add(function(){
        pipe.draw(oilRigArray[oilRigID][3], oilRigArray[oilRigID][4], oilRigArray[oilRigID][1], oilRigArray[oilRigID][1]);
    })
    demoPump.kill();
}
