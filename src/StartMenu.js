function StartMenu(){

}
StartMenu.prototype = {
    create:function(){
        var optionStyle = { font: '20pt TheMinion', fill: 'white', align: 'left' };
        startPrompt = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Touch to Start!', optionStyle);
        startPrompt.anchor.setTo(0.5,0.5);
        startPrompt.inputEnabled = true;
        startPrompt.events.onInputDown.addOnce(this.startGame);
    },
    startGame:function(pointer){
        game.state.start('gamingState');
    }
}
