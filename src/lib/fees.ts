// per-location monthly fee estimates; rates documented in calc.disclaimer
export function fees(volume: number, debit: number, ticket: number) {
  const d = debit / 100
  const credit = volume * (1 - d)
  const debitAmt = volume * d
  const debitTx = ticket > 0 ? debitAmt / ticket : 0
  const allTx = ticket > 0 ? volume / ticket : 0
  return {
    square: credit * 0.025 + debitAmt * 0.0075 + debitTx * 0.07,
    clover: volume * 0.023 + allTx * 0.1,
    acqLow: credit * 0.013 + debitTx * 0.08 + 60,
    acqHigh: credit * 0.018 + debitTx * 0.08 + 60,
  }
}

export const VOLUME_MIN = 5000
export const VOLUME_MAX = 80000
