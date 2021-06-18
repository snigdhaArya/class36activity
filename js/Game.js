class Game {
    constructor() {

    }
    gameState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("values", function (data) {
            gameState = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({ gameState: State });
    }
   start(){
       if(gameState===0){
           player=new Player();
           player.getCount();

           form1=new Form();
           form1.display();
       }
   }
}