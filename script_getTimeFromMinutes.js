function getTimeFromMinutes(num) {
  let hour = Math.floor(num / 60),
    minute = Math.floor(num % 60),
    textHour = ''

  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    return 'Ошибка, проверьте данные'
  }

  switch (hour) {
    case 0:
      textHour = 'часов'
      break
    case 1:
      textHour = 'час'
      break
    case 2:
    case 3:
    case 4:
      textHour = 'часа'
      break
    default:
      textHour = 'часов'
  }

  return `Это ${hour} ${textHour} и ${minute} минут`
}
