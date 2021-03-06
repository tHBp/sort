(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([''], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.arraySort = factory();
    }
}(this, function() {
    return function(data, sortBy, order) {
        if (!(data && sortBy)) {
            throw new Error('Specify the data source and atleast one property to sort it by');
        }
        if (!Array.isArray(data)) {
            throw new Error('Specify the data source as an array');
        }
        sortBy = Array.isArray(sortBy) ? sortBy : [sortBy];
        order = Array.isArray(order) ? order : [order];

        function performSort(order, sortBy) {
            return data.sort(function(a, b) {
                for (var i = 0; i < sortBy.length; i++) {
                    var currentOrder = sortBy[i];
                    var A = parse(a, currentOrder);
                    var B = parse(b, currentOrder);
                    if (A < B) {
                        return order[i] ? order[i] === 'asc' ? -1 : 1 : -1;
                    } else if (A > B) {
                        return order[i] ? order[i] === 'asc' ? 1 : -1 : 1;
                    }
                }
                return 0;
            });
        }

        function parse(data, sortBy) {
            var sortParams = sortBy.split('.');
            var latestValue = data;
            for (var i = 0; i < sortParams.length; i++) {
                latestValue = latestValue[sortParams[i]];
            }
            if (latestValue === undefined) {
                throw new Error('Check the \'sortBy\' parameter. Unreachable property passed in \'sortBy\'');
            }
            if (typeof latestValue === 'string' && latestValue.match(/^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i)) {
                return new Date(latestValue);
            } else if (typeof latestValue === 'string') {
                return latestValue.toLowerCase();
            } else if (typeof latestValue === 'boolean') {
                return latestValue.toString();
            } else {
                return latestValue;
            }
        }

        return performSort(order, sortBy);
    };
}));
