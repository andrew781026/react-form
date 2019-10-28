import {formatNumber} from '@telerik/kendo-intl';

const numberUtil = {
    getFormatNumber({number, format = undefined}) {

        if (format === 'decimal') {

            return number && formatNumber(number, {style: 'decimal'})

        }

        return number && formatNumber(number, format || {style: 'decimal'});
    },
    getNumberObj({number, format = undefined}) {

        return number && {
            origin: number,
            price: formatNumber(number, format || {style: 'decimal'})
        };
    },
};

export default numberUtil;
