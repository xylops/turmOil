function Boot(){}

Boot.prototype={

    preload:function(){
        game.load.image('preloadBar','img/ajax-loader.gif');

    },
    create:function(){
        //only one pointer
        game.input.maxPointer = 1;
        // take up whole container
        game.scale.scaleMode = Phaser.ScaleManager.Show_all;
        // game in center of container
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignHorizontalVertical = true;
        //create the pointer that mention on line 12
        game.input.addPointer();
        //preloading screen background
        game.stage.backgroundColor = '#68ebfd';

        game.state.start('Preloader');


    }

}
