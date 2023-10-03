function longestWord(string) {
    //Split the passed in string into individual sub strings
    let str = string.split(' ');
    //Set initial length to 0
    let length = 0;
    let word = null;

    //For loop used to run through the length of each sub string
    for (let i = 0; i < str.length; i++) {
        //Check to see if length is less than each sub string length
        if (length < str[i].length) {
            //Return it if this evaluates to true
            length = str[i].length;
            //Set word variable equal to the returned sub string
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