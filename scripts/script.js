const avocado = {};

//INIT
avocado.init = function () {
    avocado.game();
}

// AVOCADO LEVEL
avocado.level = {
    shynessLevel: 0,
    friendshipLevel: 0,
    affectionLevel: 0,
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

            //updates level key
            avocado.level[itemClass] = avocado.level[itemClass] + 1; 
            
            //update image
            $(".game-image").attr("src", `assets/console-images/actions/${itemClass}.jpg`);

            //updates image alt
            if ($(this).attr("class") == "shynessLevel") {
                $(".game-image").attr("alt", "Shy blushing half avocado.");
            } else if ($(this).attr("class") == "friendshipLevel") {
                $(".game-image").attr("alt", "Happy avocado half hanging out with some evil looking bananas.");
            } else if ($(this).attr("class") == "affectionLevel") {
                $(".game-image").attr("alt", "Avocado half with hearts flying around his head.");
            } else if ($(this).attr("class") == "freshnessLevel") {
                $(".game-image").attr("alt", "Freezing Avocado half with a scarf.");
            };

            //#2 Updates key counter
            avocado.counterLevel = avocado.counterLevel + 1; 
            //updates page counter            
            $('.game-counter-number').text(avocado.counterLevel);      
        }; 
        
        //show results if counter = 5
        if (avocado.counterLevel == 5) {
            //check for results
            if (avocado.level.shynessLevel == 1 && avocado.level.friendshipLevel == 0 && avocado.level.affectionLevel == 3 && avocado.level.freshnessLevel == 1) {
                //display Holy Guacamole result

                //updates image and alt attr
                $(".game-image").attr("src", `assets/console-images/results/holy-guacamole.jpg`);
                $(".game-image").attr("alt", "The holy grail of avocado concoctions: a sparkly Holy Guacamole with a satisfied expression, surrounded by angels.");
            } else if (avocado.level.shynessLevel == 5) {
                //display Shyvocado result

                //updates image and alt attr
                $(".game-image").attr("src", `assets/console-images/results/shyvocado.jpg`);
                $(".game-image").attr("alt", "A very shy blushing whole avocado.");
            } else if (avocado.level.friendshipLevel > 0) {
                //display Badvocado result

                //updates image and alt attr
                $(".game-image").attr("src", `assets/console-images/results/badvocado.jpg`);
                $(".game-image").attr("alt", "A rotten avocado half with an evil face.");
            } else if (avocado.level.freshnessLevel >= 3 || avocado.level.shynessLevel >= 3 ) {
                //display Guacamole!== NOT result

                //updates image and alt attr
                $(".game-image").attr("src", `assets/console-images/results/guacamole-not.jpg`);
                $(".game-image").attr("alt", "An avocado half with a sad face.");
            } else {
                //display Guacamole result

                //updates image and alt attr
                $(".game-image").attr("src", `assets/console-images/results/guacamole.jpg`);
                $(".game-image").attr("alt", "Guacamole with a happy face.");
            }             
        };
    });
}; 

//DOCUMENT READY
$(function () {
    avocado.init();
});



















