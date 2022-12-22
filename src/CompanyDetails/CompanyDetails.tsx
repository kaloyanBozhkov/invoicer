import React from 'react'

import styles from './styles.module.scss'

interface ICompanyDetails {
  direction: 'to' | 'from'
  title: string
  address: string
  country: string
  phone: string
}
export default function CompanyDetails({
  title,
  address,
  country,
  phone,
  direction,
}: ICompanyDetails) {
  return (
    <div className={styles.companyDetails} data-direction={direction}>
      <p>
        <b>Bill {direction}:</b>
      </p>
      <p>{title}</p>
      <p>{address}</p>
      <p>{country}</p>
      <p>{phone}</p>
    </div>
  )
}
