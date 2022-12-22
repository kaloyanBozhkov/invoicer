import React from 'react'

import styles from './styles.module.scss'

interface IClientNotes {
  bankName: string
  IBAN: string
  swiftCode: string

  companyId: string
  companyVAT: string
}

export default function ClientNotes({
  bankName,
  IBAN,
  swiftCode,
  companyId,
  companyVAT,
}: IClientNotes) {
  return (
    <div className={styles.clientNotes}>
      <p>CLIENT NOTES</p>
      <div>
        <p>Bank:</p>
        <p>{bankName}</p>
      </div>
      <div>
        <p>IBAN:</p>
        <p>{IBAN}</p>
      </div>
      <div>
        <p>Swift Code:</p>
        <p>{swiftCode}</p>
      </div>
      <br />
      <div>
        <p>Id. No:</p>
        <p>{companyId}</p>
      </div>
      <div>
        <p>Vat. No:</p>
        <p>{companyVAT}</p>
      </div>
    </div>
  )
}
