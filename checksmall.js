function isFirstCharLowerCase(S) {
    return S.charAt(0) === S.charAt(0).toLowerCase();
}
console.log(isFirstCharLowerCase("apple")); // Output: true
console.log(isFirstCharLowerCase("Apple")); // Output: false
