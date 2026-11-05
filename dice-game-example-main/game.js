


document.querySelector('#rollButton').addEventListener("click", event => {
    //animate the die
    //chage the value each die lands on randomly
    //switch the src to the die rolling.gif animation
    const holds = document.querySelectorAll('#gameboard input[type="checkbox"]')
    const images = document.querySelectorAll('#gameboard img');

     images.forEach((image, i) => {
        if (holds[i].checked) return;
        image.src = "assets/die_rolling.gif";
    });
    

     let dices = [
                {
                    num: 1,
                    dice: "assets/white_dice_1.gif"
                },
                {
                    num: 2,
                    dice: "assets/white_dice_2.gif"
                },
                {
                    num: 3,
                    dice: "assets/white_dice_3.gif"
                },
                {
                    num: 4,
                    dice: "assets/white_dice_4.gif"
                },
                {
                    num: 5,
                    dice: "assets/white_dice_5.gif"
                },
                {
                    num: 6,
                    dice: "assets/white_dice_6.gif"
            },

            ];
    setTimeout(() => {
        if (holds[i].checked) return;
        // before run what is in here
        images.forEach(image => {
           let index = Math.floor(Math.random() * dices.length);
           image.src = dices[index].dice
           image.alt= 'Die showing ${dices [index].num}';
        ;
        
        });
    }, 1000);


    //changing the src image


})