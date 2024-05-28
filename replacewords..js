function swapWords(S) {
    let words = S.split(' ');
    if (words.length === 2) {
        return words[1] + ' ' + words[0];
    }
    return S;
}
console.log(swapWords("Hii Boy")); // Output: Boy Hii
