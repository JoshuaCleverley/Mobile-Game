export function formatCurrency(value: number) {
  if (value != undefined && value != null)
    return value.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'GBP',
    })
  else return '£0.00'
}

export function formatNumber(value: number) {
  // Format number as a decimal with two decimal places
  if (value != undefined && value != null)
    return value.toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  else return '0.00'
}
