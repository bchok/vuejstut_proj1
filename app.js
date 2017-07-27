new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
            this.monsterHealth -= this.calculateDamage(3, 10);
            
            if (this.checkWin()){
                return;
            }
             
            this.playerHealth -= this.calculateDamage(5, 12);
            
            this.checkWin();    
        },
        specialAttack: function(){
            this.monsterHealth -= this.calculateDamage(6, 20);

            if (this.checkWin()){
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 12);

            this.checkWin();
        },
        heal: function(){
            this.playerHealth += Math.max(Math.floor(Math.random() * 15) + 1, 5);
        },
        giveUp: function(){
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
             if(this.monsterHealth <= 0){
                if (confirm('You Won! Would You Like To Play Again?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0){
                if (confirm('You Lost... Would You Like To Play Again?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false; 
        }
    }

});