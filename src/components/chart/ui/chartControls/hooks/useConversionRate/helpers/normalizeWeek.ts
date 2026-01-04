import dayjs from "dayjs"


export function normalizeWeek(date: string) {
    const d = dayjs(date)

    const year = d.year()
    const month = String(d.month() + 1).padStart(2, '0')
    const weekOfMonth = Math.ceil(d.date() / 7)

    return `${year}-${month}-W${weekOfMonth}`
}
