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

avocado.game = function () {
    $('button').on('click', function (event) {
        //stops button's default behaviour
        event.preventDefault();

        const playDay = () => {
            //variable that gets button's class
            let itemClass = $(this).attr("class");

            // if the reset button is clicked it resets all values that make the game run
            if (itemClass == "reset") {
                avocado.level.shynessLevel = 0;
                avocado.level.friendshipLevel = 0;
                avocado.level.affectionLevel = 0;
                avocado.level.freshnessLevel = 0;
                avocado.counterLevel = 0;

                //fading image out and in
                $("img").fadeOut(300).fadeIn(300);

                //changing image
                changeImage = () => {
                    $(".game-image").attr("src", `assets/console-images/initial-state/avocado.png`);
                };
                setTimeout(changeImage, 300);
                
                $(".game-image").attr("alt", "An avocado half with smiley face");
                $('.game-text-display').text("Day ").append(`<span class="game-counter-number">0</span>`);
                $(".game-screen-result").attr("class", "game-screen");
            } else if (itemClass != "reset" && avocado.counterLevel < 5) {
                //Updates key counter
                avocado.counterLevel = avocado.counterLevel + 1;

                //updates page counter            
                $('.game-counter-number').text(avocado.counterLevel);

                //updates level key correspondant to the button
                avocado.level[itemClass] = avocado.level[itemClass] + 1;

                //fading image in and out
                $("img").fadeOut(300).fadeIn(300);

                //changing image correspondant to the button
                changeImage = () => {
                    $(".game-image").attr("src", `assets/console-images/actions/${itemClass}.png`);
                };
                setTimeout(changeImage, 300);

                //updates image alt correspondant to the button
                if ($(this).attr("class") == "shynessLevel") {
                    $(".game-image").attr("alt", "Shy blushing half avocado.");
                } else if ($(this).attr("class") == "friendshipLevel") {
                    $(".game-image").attr("alt", "Happy avocado half hanging out with some evil looking bananas.");
                } else if ($(this).attr("class") == "affectionLevel") {
                    $(".game-image").attr("alt", "Avocado half with hearts flying around his head.");
                } else if ($(this).attr("class") == "freshnessLevel") {
                    $(".game-image").attr("alt", "Freezing Avocado half with a scarf.");
                };
            }

            if (avocado.counterLevel == 5) {
                //showing the results once counterLevel reaches 5
                const showResult = () => {
                    if (avocado.level.shynessLevel == 1 && avocado.level.friendshipLevel == 0 && avocado.level.affectionLevel == 3 && avocado.level.freshnessLevel == 1) {
                        //display Holy Guacamole result                

                        //updates counter text to result text
                        $('.game-text-display').text("You got a Holy Guacamole! You've made it! You took care of your avocado so well that it bloomed into the holy grail of avocado concoctions.");

                        //updates image and alt attr
                        $(".game-image").attr("src", `assets/console-images/results/holy-guacamole.png`);
                        $(".game-image").attr("alt", "The holy grail of avocado concoctions: an angelic Holy Guacamole with a happy expression");
                    } else if (avocado.level.shynessLevel == 5) {
                        //display Shyvocado result

                        //updates counter text to result text
                        $('.game-text-display').text("You got a Shyvocado! We all stare at our avocados at some point, wondering if they're already ripe...but if you just stare at it like a pervert you end up with a green avocado. They are shy creatures, so be careful!");

                        //updates image and alt attr
                        $(".game-image").attr("src", `assets/console-images/results/shyvocado.png`);
                        $(".game-image").attr("alt", "A whole unripen avocado.");
                    } else if (avocado.level.affectionLevel == 5) {
                        //display Lovocado result

                        //updates counter text to result text
                        $('.game-text-display').text("You got a Lovocado! Lucky at cards, unlucky in love? Well, not you! We all love avocados, now you have one that loves you back! Sweet! But...you don't have guacamole for the party, so you've lost the game. NO GUACAMOLE FOR YOU.");

                        //updates image and alt attr
                        $(".game-image").attr("src", `assets/console-images/results/lovocado.png`);
                        $(".game-image").attr("alt", "A happy avocado half with a heart shaped pit.");
                    } else if (avocado.level.friendshipLevel > 0) {
                        //display Badvocado result

                        //updates counter text to result text
                        $('.game-text-display').text("You got a Badvocado! What have you done?! Your avocado went bad, like bad bad. Badvocado bad! Maybe you should be more careful of the company it keeps.");

                        //updates image and alt attr
                        $(".game-image").attr("src", `assets/console-images/results/badvocado.png`);
                        $(".game-image").attr("alt", "A rotten avocado half with an evil face.");
                    } else if (avocado.level.freshnessLevel >= 3 || avocado.level.shynessLevel >= 3) {
                        //display Guacamole!== NOT result

                        //updates counter text to result text
                        $('.game-text-display').text("You got Guacamole!==NOT! Your avocado is still unripe and very disappointed. Take better care of it next time.");

                        //updates image and alt attr
                        $(".game-image").attr("src", `assets/console-images/results/guacamole-not.png`);
                        $(".game-image").attr("alt", "An avocado half with a sad face.");
                    } else {
                        //display Guacamole result

                        //updates counter text to result text
                        $('.game-text-display').text("You got Guacamole! It worked! Your avocado is ripe so it's time to make some yummy guacamole! You'll miss your green friend, but it's his fault for being so delicious.");

                        //updates image and alt attr
                        $(".game-image").attr("src", `assets/console-images/results/guacamole.png`);
                        $(".game-image").attr("alt", "Guacamole with a happy face.");
                    }
                }
                setTimeout(showResult, 1750);
            } 
        };
            
        setTimeout(playDay, 750);
    });
};     

//DOCUMENT READY
$(function () {
    avocado.init();
});



















