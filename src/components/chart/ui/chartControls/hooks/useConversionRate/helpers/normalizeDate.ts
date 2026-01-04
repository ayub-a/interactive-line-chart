import dayjs from "dayjs";
import type { ChartHistory } from "../../../../../model/types";


export function normilizeDate(history: ChartHistory[]) {
    return history.map(({ date, ...other }) => ({ date: dayjs(date).format('YYYY-MM-DD'), ...other }))
}
