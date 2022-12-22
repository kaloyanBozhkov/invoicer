import React from 'react'

import styles from './styles.module.scss'

interface IInvoiceTotal {
  total: number
  currency: string
}

export default function InvoiceTotal({ total, currency }: IInvoiceTotal) {
  return (
    <div className={styles.invoiceTotal}>
      <p>INVOICE TOTAL:</p>
      <h1>
        {currency}
        {Intl.NumberFormat('us-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(total)}
      </h1>
    </div>
  )
}
