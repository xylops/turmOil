function driller(name){
    var temp = {};

    temp.name = name;

    temp.createDriller = function(){
        this.name = game.add.sprite(100, 200, 'driller');
        this.name.anchor.setTo(0.5)
        game.physics.enable(this.name,Phaser.Physics.ARCADE);
        drillerTween = game.add.tween(this.name).to({x:300, y:200},3000);
        drillerTween.start();
        drillerTween.onComplete.add(function(){
            numbersOfDriller --;
            xylops.kill();
            if(numbersOfDriller == 0){
                updateState = null;
            }
            pipe.createPipe();
        })
    }



    return temp;
}
