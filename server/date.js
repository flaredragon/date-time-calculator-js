import { dateFunction } from './operations.js';

class dateClass {
    constructor(inputDate){
        this.date = new Date(inputDate);
    }

    getCurrentDate() {
        return this.date;
    }

    getDayOfWeek(){
        return this.date.getDay();
    }

    addDay(dateValue) {
        return new Date(this.date.setDate(this.date.getDate() + dateValue));
    }

    subtractDay(dateValue){
        return new Date(this.date.setDate(this.date.getDate() - dateValue));
    }

    addWeek(weekValue){
        return new Date(this.date.setDate(this.date.getDate() + weekValue * 7));
    }

    subtractWeek(weekValue){
        return new Date(this.date.setDate(this.date.getDate() - weekValue * 7));
    }

    addMonth(monthValue){
        return new Date(this.date.setMonth(this.date.getMonth() + monthValue));
    }

    subtractMonth(monthValue){
        return new Date(this.date.setMonth(this.date.getMonth() - monthValue));
    }

    addYear(yearValue){
        return new Date(this.date.setFullYear(this.date.getFullYear() + yearValue));
    }

    subtractYear(yearValue){
        return new Date(this.date.setFullYear(this.date.getFullYear() - yearValue));
    }

    operations = dateFunction.bind(this);
}

export default dateClass;