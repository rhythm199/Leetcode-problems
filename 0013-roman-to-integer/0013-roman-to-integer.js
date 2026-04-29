/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const object = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let res=0;
    for(i=0;i<s.length;i++) {
        if(object[s[i]] < object[s[i+1]]) 
        res-=object[s[i]];
        else
        res+=object[s[i]];
    }
    return res;
};