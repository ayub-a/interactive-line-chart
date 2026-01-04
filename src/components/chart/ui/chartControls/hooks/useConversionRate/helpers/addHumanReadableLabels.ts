import dayjs from "dayjs"


export function addHumanReadableLabels(history: Record<string, string|number>[]) {
    return history.map(({ week, ...other }) => {
        const [year, month, w] = String(week).split('-') // ['2025', '01', 'W1]
        const weekInMonth = w[1]

        const firstDayOfMonth = dayjs(`${year}-${month}-01`) // '2025-01-01'
        const weekDay = (firstDayOfMonth.day() + 6) % 7 // first week day of the month

        const startDay = 1 + (Number(weekInMonth) - 1) * 7 - weekDay
        const endDay = startDay + 6

        const daysInMonth = firstDayOfMonth.daysInMonth()

        const from = Math.max(startDay, 1)
        const to = Math.min(endDay, daysInMonth)

        const monthFormated = firstDayOfMonth.format('MMM')
        const dateFromTo = `${monthFormated}, ${from}-${to}`

        return { ...other, week, dateFromTo }
    })
}
