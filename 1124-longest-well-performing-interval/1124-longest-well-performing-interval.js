/**
 * @param {number[]} hours
 * @return {number}
 */
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    
    let sum = 0;
    let best = 0;

    for(var i = 0; i < hours.length; i++){
        if(hours[i] <= 8) sum--;
        else sum++;
        hours[i] = null;

        let needed = -Math.min(sum, 1) - 1;

        if(needed >= 0 && hours[needed] == null){
            hours[needed] = i;
        }

        if(needed == -2) best = Math.max(best, i + 1);
        else if(hours[needed + 1] != null){
            best = Math.max(best, i - hours[needed + 1]);
        }

    }

    return best;

};