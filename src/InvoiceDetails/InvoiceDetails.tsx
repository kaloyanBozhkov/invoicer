import React, { useMemo } from 'react'

import styles from './styles.module.scss'

interface IDate {
  dateStartWork: string
}

const formatDate = (d = new Date()) => `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
  addDays = (date: Date, days: number) => {
    var result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

export default function InvoiceDetails({ dateStartWork }: IDate) {
  const invoiceNumber = useMemo(() => {
      const monthDiff = (d1: Date, d2: Date) => {
        let months
        months = (d2.getFullYear() - d1.getFullYear()) * 12
        months -= d1.getMonth()
        months += d2.getMonth()
        return months <= 0 ? 0 : months
      }

      return monthDiff(new Date(dateStartWork), new Date()) + 1 // for the current month
    }, [dateStartWork]),
    { issued, due } = useMemo(
      () => ({
        issued: formatDate(),
        due: formatDate(addDays(new Date(), 5)),
      }),
      []
    )

  return (
    <div className={styles.invoiceDetails}>
      <p>Invoice #{invoiceNumber}</p>
      <div>
        <p>Issued:</p>
        <p>{issued}</p>
      </div>
      <div>
        <p>Due:</p>
        <p>{due}</p>
      </div>
    </div>
  )
}
