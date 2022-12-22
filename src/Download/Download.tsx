import React from 'react'
import html2PDF from 'jspdf-html2canvas'

import styles from './styles.module.scss'

export default function Download() {
  return (
    <button
      className={styles.download}
      onClick={() => {
        const element = document.querySelector('.App') as HTMLElement
        if (!element) return console.error('could not find app wtf?')

        html2PDF(element, { output: `invoice-${new Date().toISOString()}.pdf` }).then(
          (pdf: unknown) => {
            console.log('Generate & downloaded! jsPDF instance:', pdf)
          }
        )
      }}
    >
      Download PDF
    </button>
  )
}
