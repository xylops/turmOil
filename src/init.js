
var game = new Phaser.Game(640 , 360, Phaser.CANVAS, 'game');
game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('StartMenu', StartMenu);
game.state.add('gamingState', gamingState);
game.state.add('demo', demo);
game.state.start('Boot');
