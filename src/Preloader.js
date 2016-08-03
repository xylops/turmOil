function Preloader(){

}

Preloader.prototype = {
    preload : function(){
        game.preloadBar = this.add.sprite(game.world.centerX, game.world.centerY, 'preloadBar');
        game.preloadBar.anchor.setTo(0.5,0.5);
        game.load.setPreloadSprite(game.preloadBar);

        game.load.image('rock', 'img/rock.png');
        game.load.image('mud', 'img/ground/mud.png');
        game.load.image('mud_c', 'img/ground/cover-layer.png');
        game.load.image('oil', 'img/ground/oil.png');
        game.load.image('pipe', 'img/ground/pipe.png')
        game.load.image('pipeTip','img/ground/pipeTip.png');
        game.load.image('driller','img/ground/driller.png')

        game.load.image('pump', 'img/pump.png');

        game.load.image('confirm', 'img/confirm.png');
        game.load.image('cancel', 'img/cancel.png')
        game.load.image('btn', 'img/btn.png')


    },

    create : function(){
        game.preloadBar.cropEnabled = false;

    },

    update:function(){
        game.ready=true;
        game.state.start('StartMenu');

    }
}
