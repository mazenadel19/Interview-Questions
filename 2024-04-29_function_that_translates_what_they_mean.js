//Imagine the users on your app are all typing slightly incorrectly, in that they shifted their hands one key to the right.
// Write a function that translates what they mean to say. The examples below assume an ANSI keyboard layout, you can choose how you want to do that!

translateRightShift(';p; epeor')
// "lol wowie"

translateRightShift('ejp s, o')
// "who am i"

function translateRightShift(text){
    const QWERTY_MAP = {
        'w': 'q', 'e': 'w', 'r': 'e', 't': 'r', 'y': 't', 'u': 'y', 'i': 'u', 'o': 'i', 'p': 'o', '[': 'p',
        's': 'a', 'd': 's', 'f': 'd', 'g': 'f', 'h': 'g', 'j': 'h', 'k': 'j', 'l': 'k', 'l': ':',
        'x': 'z', 'c': 'x', 'v': 'c', 'b': 'v', 'n': 'b', 'm': 'n', 'm': ',', ' ': ' '
    }
    let translatedText=''
    const characters = text.split('');
    characters.forEach(character => {
        translatedText+=QWERTY_MAP[character]
    });
    return translatedText
}