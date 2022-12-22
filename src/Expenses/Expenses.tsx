import React, { useEffect, useReducer, useState } from 'react'
import Separator from '../Sepearator/Separator'

import styles from './styles.module.scss'

export interface IExpense {
  title: string
  qty: number
  cost: number
}

type IExpenseSet = { prop: keyof IExpense; val: IExpense[keyof IExpense] }

interface IExpenses {
  expenses: IExpense[]
  currency: string
  onAdd: (expense: IExpense) => void
  onRemove: (expense: IExpense) => void
}

const Heading = ({ title }: { title: string }) => (
    <div className={styles.heading}>
      <h3>{title}</h3>
      <Separator data-absolute="bottom" />
    </div>
  ),
  initial = {
    title: 'Unnamed',
    cost: 0,
    qty: 1,
  }

export default function Expenses({ expenses, currency, onAdd, onRemove }: IExpenses) {
  const [newExpense, setNewExpense] = useReducer(
      (acc: IExpense, prop: IExpenseSet | 'reset') =>
        prop === 'reset'
          ? initial
          : {
              ...acc,
              [prop.prop]: prop.val,
            },
      initial
    ),
    [actionsActive, setActionsActive] = useState(false)

  useEffect(() => {
    if (!actionsActive) return

    const listener = ({ key }: KeyboardEvent) => {
      if (key === 'Enter') {
        onAdd(newExpense)
        setActionsActive(false)
        setNewExpense('reset')
      } else if (key === 'Escape') {
        setActionsActive(false)
        setNewExpense('reset')
      }
    }

    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [actionsActive, newExpense, onAdd])

  return (
    <div className={styles.expenses} data-actions-active={actionsActive}>
      <div className={styles.column}>
        <Heading title="ITEM" />
        {expenses.map(({ title }, idx) => (
          <p key={idx}>{title}</p>
        ))}
        <div className={styles.action}>
          <input
            type="text"
            value={newExpense.title === 'Unnamed' ? '' : newExpense.title}
            placeholder="Item title"
            onChange={(e) => setNewExpense({ prop: 'title', val: e.currentTarget.value })}
            onFocus={() => setActionsActive(true)}
          />
        </div>
      </div>
      <div className={styles.column}>
        <Heading title="COST" />
        {expenses.map(({ cost }, idx) => (
          <p key={idx}>
            {currency}
            {Intl.NumberFormat('us-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(cost)}
          </p>
        ))}
        <div className={styles.action}>
          <input
            type="number"
            value={newExpense.cost || ''}
            placeholder="Cost"
            onChange={(e) => setNewExpense({ prop: 'cost', val: e.currentTarget.value })}
            onFocus={() => setActionsActive(true)}
          />
        </div>
      </div>
      <div className={styles.column}>
        <Heading title="QTY" />
        {expenses.map(({ qty }, idx) => (
          <p key={idx}>{qty}</p>
        ))}
        <div className={styles.action}>
          <input
            type="number"
            value={newExpense.qty || ''}
            placeholder="Quantity"
            onChange={(e) => setNewExpense({ prop: 'qty', val: e.currentTarget.value })}
            onFocus={() => setActionsActive(true)}
          />
        </div>
      </div>
      <div className={styles.column}>
        <Heading title="PRICE" />
        {expenses.map((expense, idx) => (
          <div key={idx} className={styles.lastCol}>
            <p>
              {currency}
              {Intl.NumberFormat('us-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(expense.qty * expense.cost)}
            </p>
            {idx !== 0 && (
              <div className={styles.actionRow}>
                <button className={styles.removeBtn} onClick={() => onRemove(expense)}>
                  X
                </button>
              </div>
            )}
          </div>
        ))}
        {actionsActive && (
          <div className={styles.action}>
            <button
              className={styles.removeBtn}
              onClick={() => {
                setNewExpense('reset')
                setActionsActive(false)
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
