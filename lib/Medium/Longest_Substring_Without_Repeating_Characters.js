var lengthOfLongestSubstring = function(s) {
    let startIndex = 0;
    const hashMap = new Map();
    let output = 0;
    
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        if (hashMap.has(character)) {
            const index = hashMap.get(character);
            const newOutput = i - startIndex + (startIndex > index ? 1 : 0 );
            output = Math.max(output, newOutput);
            startIndex = Math.max(startIndex, index);
        } else {
            output = Math.max(output, i - startIndex + 1);
        }
        
        hashMap.set(character, i + 1);
    }
    return output;
};