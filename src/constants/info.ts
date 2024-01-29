// fill with your details here and do not commit
import { info as hiddenInfo } from './_info'

const defaults = {
  dateStartedWork: 'MM/DD/YYYY',
  position: '',
  from: {
    title: '',
    address: '',
    country: '',
    phone: '',
  },
  clientNotes: {
    bankName: '',
    swiftCode: '',
    IBAN: '',
    companyId: '',
    companyVAT: '',
  },
  to: {
    title: '',
    address: '',
    country: '',
    phone: '',
  },
  payment: {
    currency: '',
    currencyAcronym: '',
    baseSalary: 0,
  },
  monthsPaused: 0,
}

export const info = {
  ...defaults,
  // remove this here if not using hidden info
  ...(hiddenInfo || {}),
}
