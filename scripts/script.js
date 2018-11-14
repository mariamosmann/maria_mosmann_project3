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
        if(avocado.counterLevel < 5) {

            //#1 Updates the avocado.level correspondent key and image

            //gets button's class (same as avocado.level items)
            let itemClass = $(this).attr("class");

            //updates level
            avocado.level[itemClass] = avocado.level[itemClass] + 1;          

            //#2 Update counter
            avocado.counterLevel = avocado.counterLevel + 1;

        //show results if counter = 5
        } else if (avocado.counterLevel = 5) {
            //check for results
            if (shynessLevel === 1 && friendshipLevel === 0 && affinityLevel === 3 && freshnessLevel === 1) {
                //display Holy Guacamole result
                console.log("Oh hai")
            } else if (shynessLevel === 5) {
                //display Shyvocado result
                console.log("Hallo")
            } else if (friendshipLevel > 0) {
                //display Badvocado result
                console.log("Sup")
            } else if (shynessLevel > 3 || freshnessLevel > 3) {
                //display Guacamole!== NOT result
                console.log("Holla")
            } else {
                //display Guacamole result
                console.log("Heeeeey")
            }             
        };
    });
}; 

//DOCUMENT READY
$(function () {
    avocado.init();
});



















