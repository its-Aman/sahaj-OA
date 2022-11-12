export class Util {
    static getDuration(start: Date): string {
        const duration = []
        const now = new Date()
        const year = now.getFullYear() - start.getFullYear()
        const month = now.getMonth() - start.getMonth()
        const day = now.getDate() - start.getDate()
        const hour = now.getHours() - start.getHours()
        const minute = now.getMinutes() - start.getMinutes()

        if (year > 0) duration.push(`Year: ${year}`)

        if (month > 0) duration.push(`Month: ${month}`)

        if (day > 0) duration.push(`Day: ${day}`)

        if (hour > 0) duration.push(`Hour: ${hour}`)

        if (minute > 0) duration.push(`Minute: ${minute}`)

        return duration.join(", ")
    }

    public static calculateDurationInMinutes(start: Date): number {
        const now = new Date()
        const diffTimeInHours = Math.ceil((now.getTime() - start.getTime()) / (60 * 60 * 1000))
        return diffTimeInHours
    }

    public static toDateString(date: Date): string {
        return date
            .toLocaleString('en-IN', {
                dateStyle: 'medium',
                timeStyle: 'medium',
                hour12: false,
            })
    }
}