export const OutPutTime = (timestamp: number, type: 'AM/PM' | '24H') => {
    const time: Date = new Date(timestamp);
    if (type === 'AM/PM') {
        return `${time.getHours() > 12 ? `${time.getHours() < 22 ? '0' : ''}${time.getHours() - 12}` : `${time.getHours() < 10 ? '0' : ''}${time.getHours()}`}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}${time.getHours() >= 12 ? ' PM' : ' AM'}`
    } else return `${time.getHours() < 10 ? '0' : ''}${time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`
}