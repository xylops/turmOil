function gamingState(){
    updateState = null;
    numberOfOilRig = 0;
    numbersOfDriller = 0 ;
    oilRigArray = [];
    numbersOfJoint = 0;
    floorLevel = 100
};

gamingState.prototype = {
    preload: function(){
        //for checking FPS
        game.time.advancedTiming = true;
    },
    create: function(){
        this.buildworld();
    },
    buildworld:function(){
        dirt = game.add.group();
        dirt.enableBody = true;
        dirt.physicalBodyType = Phaser.Physics.ARCADE;
        for(var j = floorLevel; j < game.world.height; j = j+16 ){
            for (var i = 0; i < game.world.width; i=i+16){
                var mud = dirt.create(i, j, 'mud_c');
            }
        }
        // create pump button
        pumpBtn = game.add.sprite(game.world.width*0.95, game.world.height*0.4, 'pump');
        pumpBtn.anchor.setTo(0.5, 1);
        pumpBtn.scale.setTo(0.5);
        pumpBtn.inputEnabled = true;
        pumpBtn.input.enableDrag(true);
        pumpBtn.input.enableSnap(20,20, false, true);
        pumpBtn.events.onInputUp.add(function(){
            oilRig.drawRig();
        });

        // create drillers group
        drillers = game.add.group();
        drillers.enableBody = true;

        //create pipeJoint group
        joints = game.add.group();
        joints.enableBody = true;
    },

    update: function(){
        if(numbersOfJoint > 0){
            game.world.bringToTop(joints);
        }


        switch (updateState){
            // diggingTunnel
            case 1:
                game.physics.arcade.overlap(drillers, dirt, function collisionHandler(drillers, mud){
                    mud.kill();
                });
                break;
            case 2:
                console.log('this is state two')
                break
            default:
                // console.log('default');
                break;
        }
    },
    render:function(){
        // debug text fps
        game.debug.text('FPS: ' + (game.time.fps || '--') , 2, 14, "#00ff00");
    },
}
