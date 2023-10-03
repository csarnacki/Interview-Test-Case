function longestWord(string) {
    let str = string.split(' ');
    let length = 0;
    let word = null;

    for (let i = 0; i < str.length; i++) {
        if (length < str[i].length) {
            length = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord('The weather is cold today'));
//Returns 'weather'

console.log(longestWord('I am hungry'));
//Returns 'hungry'

console.log(longestWord('The car is brown'));
//Returns 'brown'