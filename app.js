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
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;
            
            if(this.monsterHealth <= 0){
                alert('You Won!');
                this.gameIsRunning = false;
                return;
            }   

            var mMax = 5;
            var mMin = 12;
            var mDamage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= mDamage;
            
            if(this.playerHealth <=0){
                alert('You Lost!');
                this.gameIsRunning = false;
            }
        },
        specialAttack: function(){

        },
        heal: function(){

        },
        giveUp: function(){
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    }

});