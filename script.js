
function myFunction() {
    var text;
    var adventure = prompt('You find a million dollars while traipsing through the forest.\nDo you take it?\nY or N');
    var adventure = adventure.toLowerCase();
    var gameover = '';

    while (gameover === '') {
        switch (adventure) {
            case 'y':
			
                var adventure = prompt('You take the money, but on the way home you come also across a cache of weapons.\nDo you take the weapons as well?\nYes or No');
                var adventure = adventure.toLowerCase();
                break;
            case 'n':
				
                var adventure = prompt('Do you:\nA = leave the money and carry on your merry way \nB = report it to the police?');
                var adventure = adventure.toLowerCase();
                break;
            default:
                alert('Gibberish!\nTry again.');
                var gameover = 'Gibberish! Try again.';
                break;
            case 'yes':
                var yes = prompt('You are now a dangerous combination of rich and heavily armed.\nPick one:\nSpend the money\nSell the weapons\nKeep everything');
                var yes = yes.toLowerCase();
                if (yes === 'spend the money') {
                    alert('You drank a million dollars worth of pumpkin spice lattes in a week.\nPlease rethink your life choices.\nGame over.');
                    var gameover = 'You drank a million dollars worth of pumpkin spice lattes in a week. Please rethink your life choices. Game over.';
                } else if (yes === 'sell the weapons') {
                    alert('The Mexican drug cartel traded a case of Coronoas for the weapons.\nShame on you.\nGame over.');
                    var gameover = 'The Mexican drug cartel traded a case of Coronoas for the weapons. Shame on you. Game over.';
                } else if (yes === 'keep everything') {
                    alert('You have a million dollars and cache of weapons.\nYou know you cannot take it with you when you die.\nGame Over.');
                    var gameover = 'You have a million dollars and cache of weapons. You know you cannot take it with you when you die. Game Over';
                } else {
                    alert('Poppycock!\nTry again.');
                    var gameover = 'Poppycock! Try again.';
                }
                break;
			
            case 'no':
                var no = prompt('Do you:\nOption 1 = ignore the weapons because they are not filled with unicorns and sunshine?\nOption 2 = report your disappointment to the police?');
                var no = no.toLowerCase();
                if (no === 'option 2') {
                    alert('You reported it to the police, but were laughed out of town for having ridiculous expectations.\nGame over.');
                    var gameover = 'You reported it to the police, but were laughed out of town for having ridiculous expectations. Game over.';
                } else if (no === 'option 1') {
                    alert('You ignored the weapons, but languished from disappointment.\nGame over.');
                    var gameover = 'You ignored the weapons, but languished from disappointment. Game over.';
                } else {
                    alert('Good golly Miss Molly!\nTry again.');
                    var gameover = 'Good golly Miss Molly! Try again.';
                }
                break;
            case 'a':
                var a = prompt('Are you sure?\nTotally positive or \nNot really sure');
                var a = a.toLowerCase();
                if (a === 'totally positive') {
                    alert('You just walked away from a million dollars.\nGo have a pity party.\nGame over.');
                    var gameover = 'You just walked away from a million dollars. Go have a pity party. Game over.';
                } else if (a === 'not really sure') {
                    alert('Grab a pumpkin spice latte and think it over.\nGame over.');
                    var gameover = 'Grab a pumpkin spice latte think it over. Game over.';
                } else {
                    alert('Good grief.\nTry again.');
                    var gameover = 'Good grief. Try again.';
                }
                break;
            case 'b':
                var b = prompt('Are you sure? \nAbsolutely \nNot at all');
                var b = b.toLowerCase();
                if (b === 'absolutely') {
                    alert('You reported it to the police, but it was really monopoly money and they laughed at you.\nGame over.');
                    var gameover = 'You reported it to the police, but it was really monopoly money and they laughed at you. Game over.';
                } else if (b === 'not at all') {
                    alert('Meditate on how you can be more decisive.\nOr dont.\nGame over.');
                    var gameover = 'Meditate on how you can be more decisive. Or dont. Game over.';
                } else {
                    alert('Do not pass Go. Do not collect $200".\nTry again.');
                    var gameover = 'Do not pass Go. Do not collect $200. Try again.';
                    break;
                }
                document.getElementById("demo").innerHTML = gameover;
        }
    }
}