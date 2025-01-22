exports.extract = function(inputStr) {
    let tmp;
    let res = [];
    
    function innerExtract(s) {
        for(var i = 0; i < s.length; i++) {
            for(var j = 0; j < 1; j++) {
                tmp = s[i];
                if(!isNaN(parseInt(tmp))) {
                    res[res.length] = tmp;
                }
            }
        }
    }
    
    innerExtract(inputStr);
    return res;
};
