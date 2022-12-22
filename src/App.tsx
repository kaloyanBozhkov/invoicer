import React, { useMemo, useState } from 'react'
import AmountDue from './AmountDue/AmountDue'
import './App.css'
import ClientNotes from './ClientNotes/ClientNotes'
import CompanyDetails from './CompanyDetails/CompanyDetails'
import { info } from './constants/info'
import Expenses from './Expenses/Expenses'
import InvoiceDetails from './InvoiceDetails/InvoiceDetails'
import InvoiceTotal from './InvoiceTotal/InvoiceTotal'
import Separator from './Sepearator/Separator'

function App() {
  const [expenses, setExpenses] = useState([
      {
        title: `For engineering services for the month of ${new Date().toLocaleString('default', {
          month: 'long',
        })} of ${new Date().getFullYear()}`,
        qty: 1,
        cost: info.payment.baseSalary,
      },
    ]),
    total = useMemo(() => expenses.reduce((acc, e) => (acc += e.qty * e.cost), 0), [expenses])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="primary">Invoice</h1>
        <p>{info.position}</p>
      </header>
      <div className="group">
        <CompanyDetails {...info.to} direction="to" />
        <CompanyDetails {...info.from} direction="from" />
      </div>
      <Separator />
      <div className="group">
        <InvoiceDetails dateStartWork={info.dateStartedWork} />
        <InvoiceTotal total={total} currency={info.payment.currency} />
      </div>
      <Expenses
        expenses={expenses}
        currency={info.payment.currency}
        onAdd={(expense) => setExpenses((prev) => [...prev, expense])}
        onRemove={(expense) => setExpenses((prev) => prev.filter((e) => e !== expense))}
      />
      <div className="group top-align">
        <Separator data-absolute="top" />
        <ClientNotes {...info.clientNotes} />
        <AmountDue
          total={total}
          currency={info.payment.currency}
          currencyAcronym={info.payment.currencyAcronym}
        />
      </div>
    </div>
  )
}

export default App
