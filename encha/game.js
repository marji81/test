enchant();

window.onload = function() {
    var game = new Game(320, 320);
    game.preload('chara1.gif');
    game.preload('end.png');

    game.onload = function () {

        // 1•C–Ú
        var bear = new Sprite(32, 32);
        bear.image = game.assets['chara1.gif'];
        bear.frame = 10;
        bear.y     = 30;
        bear.backgroundColor = 'red';

        // 2•C–Ú
        var bear2 = new Sprite(32, 32);
        bear2.image = game.assets['chara1.gif'];
        bear2.frame = 3;
        bear2.x     = 280;
        bear2.y     = 30;
        bear2.backgroundColor = 'blue';

        var label = new Label();
        var label2 = new Label();
        label2.x = 100;

        game.rootScene.addChild(bear);
        game.rootScene.addChild(bear2);
        game.rootScene.addChild(label);
        game.rootScene.addChild(label2);


        // gameOver
        function gameOver () {
            var gameOverScene = new Scene();
            gameOverScene.backgroundColor = 'black';
            var overImg = new Sprite(189, 97);
            overImg.image = game.assets['end.png'];
            overImg.x = 50;
            overImg.y = 100;
            gameOverScene.addChild(overImg);
            gameOverScene.addChild(label);
            label.x = 50;
            label.color = 'white';
            game.pushScene(gameOverScene);
        }

        game.addEventListener('enterframe' , function() {
            label.text = game.frame;
        });

        bear.addEventListener('enterframe' , function() {
            if (game.input.right) {
                this.x += 5;
            }
            if (game.input.left) {
                this.x -= 5;
            }
            if (this.within(bear2, 20)) {
                label2.text = "hit";
                gameOver();
                game.stop();
            } else {
                label2.text = "empty";
            }
        });
    };

    game.start();
};

