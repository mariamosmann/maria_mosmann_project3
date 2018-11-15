const avocado = {};

//INIT
avocado.init = function () {
    avocado.game();
}

// AVOCADO LEVEL
avocado.level = {
    shynessLevel: 0,
    friendshipLevel: 0,
    affinityLevel: 0,
    freshnessLevel: 0
}

//COUNTER LEVEL
avocado.counterLevel = 0;

// WHEN USER CLICKS BUTTOM, 1 IS ADDED TO ITS CORRESPONDENT LEVEL 
avocado.game = function () {
    $('button').on('click', function (event) {
        //stops button's default behaviour
        event.preventDefault();
        
        //run the game if counter < 5
        if (avocado.counterLevel < 5) {

            //#1 Updates the avocado.level correspondent key and image

            //gets button's class (same as avocado.level items)
            let itemClass = $(this).attr("class");

            //updates level
            avocado.level[itemClass] = avocado.level[itemClass] + 1;          

            //#2 Update counters
            avocado.counterLevel = avocado.counterLevel + 1;             
            $('.game-counter').text(avocado.counterLevel);      
        }; 
        
        //show results if counter = 5
        if (avocado.counterLevel == 5) {
            //check for results
            if (avocado.level.shynessLevel == 1 && avocado.level.friendshipLevel == 0 && avocado.level.affinityLevel == 3 && avocado.level.freshnessLevel == 1) {
                //display Holy Guacamole result
                console.log("Oh hai");
            } else if (avocado.level.shynessLevel > 4) {
                //display Shyvocado result
                console.log("Hallo");
            } else if (avocado.level.friendshipLevel > 0) {
                //display Badvocado result
                console.log("Sup");
            } else if (avocado.level.freshnessLevel >= 2 && avocado.level.shynessLevel >= 1 ) {
                //display Guacamole!== NOT result
                console.log("Holla");
            } else {
                //display Guacamole result
                console.log("Heeeeey");
            }             
        };
    });
}; 

//DOCUMENT READY
$(function () {
    avocado.init();
});



















