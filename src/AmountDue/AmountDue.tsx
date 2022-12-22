import React from 'react'
import Separator from '../Sepearator/Separator'

import styles from './styles.module.scss'

interface IAmountDue {
  total: number
  currency: string
  currencyAcronym: string
}
export default function AmountDue({ total, currency, currencyAcronym }: IAmountDue) {
  const formatted = Intl.NumberFormat('us-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total)
  return (
    <div className={styles.amountDue}>
      <div>
        <p>Subtotal</p>{' '}
        <p>
          {currency} {formatted}
        </p>
      </div>
      <Separator />
      <div>
        <p>Invoice Total</p>{' '}
        <p>
          {currency} {formatted}
        </p>
      </div>
      <Separator />
      <div>
        <p>Amount Due ({currencyAcronym})</p>{' '}
        <p>
          {currency} {formatted}
        </p>
      </div>
    </div>
  )
}
