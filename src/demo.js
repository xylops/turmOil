function demo(){
    floorLevel = 100
};

demo.prototype = {
    preload:function(){
        game.time.advancedTiming = true;
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //
        // game.physics.arcade.gravity.y = 200;
        // mud = game.add.tileSprite(0,floorLevel, game.world.width,game.world.height - floorLevel, 'mud');
        //
        //
        // btn = game.add.sprite(0,0, 'btn');
        //
        // game.physics.enable([ btn, mud ], Phaser.Physics.ARCADE);
        // mud.body.immovable = true;
        // mud.body.allowGravity = false;
        //
        // btnTween = game.add.tween(btn).to({x:300, y:0}, 5000);
        // btnTween.start();







        // dirt = game.add.group();
        // dirt.enableBody = true;
        // dirt.physicalBodyType = Phaser.Physics.ARCADE;
        // for(var j = floorLevel; j < game.world.height; j = j+5 ){
        //     for (var i = 0; i < game.world.width; i=i+5){
        //         var mud = dirt.create(i, j, 'mud');
        //     }
        // }





        for(var j = floorLevel; j < game.world.height; j = j+16 ){
            for (var i = 0; i < game.world.width; i=i+16){
                 mud = game.add.tileSprite(i,j, 15,15, 'mud');
            }
        }

        btn = game.add.sprite(0,0, 'btn');
        game.physics.enable([ btn, mud ], Phaser.Physics.ARCADE);
        mud.body.immovable = true;
        mud.body.allowGravity = false;

    },
    buildworld:function(){

    },

    update: function(){
        game.physics.arcade.overlap(btn, mud, function collisionHandler(btn, mud){
            console.log('collide');
            mud.kill();
        });

    },

    render:function(){
        game.debug.text('FPS: ' + (game.time.fps || '--') , 2, 14, "#00ff00");
    },

}
