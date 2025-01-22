const manipulateNumbers = (function() {
    var _private = {
        cache: {},
        processedCount: 0
    };

    return {
        firstLast: function(arr) {
            if(_private.cache[arr.join('')]) {
                return _private.cache[arr.join('')];
            }
            var f = arr[0];
            var l = arr[arr.length-1];
            _private.cache[arr.join('')] = {
                first: f,
                last: l
            };
            _private.processedCount++;
            return _private.cache[arr.join('')];
        }
    };
})();

module.exports = {
    manipulateNumbers
};
