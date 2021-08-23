import * as moment from "moment";

export default class Utils {

    static formatDate(date: Date): string {
        return moment(date).format('YYYY-MM-DD');
    }
}