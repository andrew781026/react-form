import moment from "moment";
import numberUtil from "./numberUtil";
import numeral from "numeral";

const dateUtil = {
    addDays({date, format, days}) {
        return moment(date, format).add(days, "d");
    },
    getDateObj({date, format = undefined}) {

        // HHmm 的時間 , 需要補 0 做處理
        const newDate = (format === 'HHmm') ? numberUtil.getFormatNumber({number: date, format: '0000'}) : date;

        return newDate && {
            dateStr: moment(newDate, format).format('YYYY/MM/DD'),
            dateTimeStr: moment(newDate, format).format('YYYY/MM/DD HH:mm:SS'),
            timeStr: moment(newDate, format).format('HH:mm:SS'),
            code: moment(newDate, format).format('YYYYMMDD'),
            show: moment(newDate, format).format('YYYY/MM/DD'),
            origin: newDate,
            date: moment(newDate, format).toDate()
        };
    },
    getDate({date, format = undefined}) {

        // HHmm 的時間 , 需要補 0 做處理
        const newDate = (format === 'HHmm') ? numberUtil.getFormatNumber({number: date, format: '0000'}) : date;

        return newDate && moment(newDate, format).toDate();
    },
    getDateStr({date, format = undefined}) {

        return date && moment(date).format(format);
    },
    getSunday({date, format = undefined}) {
        return moment(date, format).startOf('week').toDate();
    },
    getSaturday({date, format = undefined}) {
        return moment(date, format).endOf('week').toDate();
    },
    getDayOfMonth({date, format = undefined}) {

        // Gets or sets the day of the month.
        return moment(date, format).date();
    },
    getFirstDayInMonth({date, format = undefined}) {
        return moment(date, format).startOf('month').toDate();
    },
    getLastDayInMonth({date, format = undefined}) {
        return moment(date, format).endOf('month').toDate();
    },
    getDaysInMonth({date, format = undefined}) {
        return moment(date, format).daysInMonth();
    },
    getNextMonth(date) {
        return moment(date).add(1, 'month').toDate();
    },
    getLastMonth(date) {
        return moment(date).add(-1, 'month').toDate();
    },
    getMonthArray({year, month}) {

        const monthFirstDate = new Date(year, month, 1);
        const monthLastDate = moment(monthFirstDate).endOf('month');
        const dayAmountOfThisMonth = monthLastDate.diff(monthFirstDate, 'days');
        const weekAmountOfThisMonth = Math.ceil(dayAmountOfThisMonth / 7);

        let currentDate = monthFirstDate;
        const monthArray = [];
        for (let i = 0; i < weekAmountOfThisMonth; i++) {
            const weekArray = this.getWeekArray(currentDate);
            monthArray.push(weekArray);
            currentDate = this.addSevenDay(currentDate);
        }

        return monthArray;
    },
    getMonthArrayWithDate(date) {
        return this.getMonthArray({year: moment(date).year(), month: moment(date).month()});
    },
    getWeekArray(date) {

        const from_date = moment(date).startOf('week').toDate();
        const to_date = moment(date).endOf('week').toDate();

        return this.getWeeklyDateArray({startDate: from_date, endDate: to_date});
    },
    getWeekDay(date) {
        return moment(date).weekday();  // Number
    },
    getWeeklyDateArray({startDate, endDate}) {

        const dateArray = [];
        let currentDate = startDate;
        while (currentDate <= endDate) {
            dateArray.push(currentDate);
            currentDate = this.addOneDay(currentDate);
        }
        return dateArray;
    },
    addOneDay(date) {
        return moment(date).add(1, 'days').toDate();
    },
    addSevenDay(date) {
        return moment(date).add(7, 'days').toDate();
    },
    getMonth(date) {
        return date.getMonth();
    },
};

export default dateUtil;
