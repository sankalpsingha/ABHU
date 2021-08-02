import dayjs from 'dayjs';

export function niceDate(epoch) {
    return dayjs.unix(epoch).format('DD-MMM-YYYY');
};

export function niceNumber(number) {
    var newValue = number;
    if (number >= 1000) {
        var suffixes = ['', 'k', 'm', 'b', 't'];
        var suffixNum = Math.floor(('' + number).length / 3);
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat(
                (suffixNum !== 0
                    ? number / Math.pow(1000, suffixNum)
                    : newValue
                ).toPrecision(precision)
            );
            var dotLessShortValue = (shortValue + '').replace(
                /[^a-zA-Z 0-9]+/g,
                ''
            );
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        if (shortValue % 1 !== 0) {
            shortValue = shortValue.toFixed(1);
        }
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
};