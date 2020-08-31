import {operations} from './constants.js';
export function dateFunction(operation, value) {
    console.log(this,operation,value);
    switch (operation) {
        case operations.TODAY:
            return this.getCurrentDate()
            break;
        case operations.TOM:
            return this.addDay(1)
            break;
        case operations.DAY_A_T:
            return this.addDay(2)
            break;
        case operations.YESTERDAY:
            return this.subtractDay(1)
            break;
        case operations.DAY_BEF_Y:
            return this.subtractDay(2)
            break;
        case operations.NEXT_DAY:
            return this.addDay(1)
            break;
        case operations.NEXT_WEEK:
            return this.addWeek(1)
            break;
        case operations.LAST_WEEK:
            return this.subtractWeek(1)
            break;
        case operations.NEXT_MONTH:
            return this.addMonth(1)
            break;
        case operations.LAST_MONTH:
            return this.subtractMonth(1)
            break;
        case operations.NEXT_YEAR:
            return this.addYear(1)
            break;
        case operations.ADD_DAYS:
            return this.addDay(Number(value))
            break;
        case operations.SUBTRACT_DAY:
            return this.subtractDay(Number(value))
            break;
        case operations.ADD_WEEK:
            return this.addWeek(Number(value))
            break;
        case operations.SUBTRACT_WEEK:
           return this.subtractWeek(Number(value))
            break;
        case operations.ADD_MONTH:
            return this.addMonth(Number(value))
            break;
        case operations.SUBTRACT_MONTH:
            return this.subtractMonth(Number(value))
            break;
        case operations.ADD_YEAR:
            return this.addYear(Number(value))
            break;
        case operations.SUBTRACT_YEAR:
            return this.subtractYear(Number(value))
            break;
        default:
            return 'Invalid Input';
            break;
    }
}
