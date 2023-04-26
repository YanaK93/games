window.onload = function () {
    init();
};

function init() {
    alert('Hello players');
    const name = prompt('Please enter your name');
    const figure = prompt('Please select rock/scissors/paper');
    if (figure != 'rock' && figure != 'scissors' && figure != 'paper') 
    {
        alert('you entered' + figure + 'which is not correct')
    };
    var words = ['rock', 'paper', 'scissors'];
    var word = words[Math.floor(Math.random() * words.length)];
    alert('Program choosed ' + word);
    if (figure == word) 
    {
        alert('draw');
    }
    else 
    {
        if (figure == 'rock' && word == 'scissors') 
        { 
            alert('Player win') 
        }
        if (figure == 'rock' && word == 'paper')
        {
            alert('Computer win')
        }
        if (figure == 'scissors' && word == 'paper')
        {
            alert('Player win')
        }
        if (figure == 'scissors' && word == 'rock')
        {
            alert('Computer win')
        }
        if (figure == 'paper' && word == 'rock')
        {
            alert('Player win')
        }
        if (figure == 'paper' && word == 'scissors')
        {
            alert('Computer win')
        }
    }

}
