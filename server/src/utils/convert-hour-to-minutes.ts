export function convertHourToMinutes(hour: String) {
    const [hours, minutes] = hour.split(':').map(Number);

    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;
}