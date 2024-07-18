export const OutPutTime = (time: Date, type: 'AM/PM' | '24H') => {
    if (type === 'AM/PM') {
        return `${time.getHours() > 12 ? time.getHours() - 12 : time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}${time.getHours() >= 12 ? ' PM' : ' AM'}`
    } else return `${time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`
}