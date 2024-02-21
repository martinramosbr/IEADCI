import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Calendar from 'react-calendar'

import IButton from './components/Button'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

function App() {
  const [value, onChange] = useState<Value>(new Date())
  const [showDatePicker, setShowDatePicker] = useState(true)

  return (
    <>
    <div className='btn-calendar'>
      <IButton
        onPress={() =>
          setShowDatePicker(!showDatePicker)
        }
      >
        Calendário
      </IButton>

    </div>
      <div
        className="card"
        hidden={showDatePicker}
      >
        <Calendar onChange={onChange} value={value} />
      </div>
      <div
      
      >
        <Calendar onChange={onChange} value={value} />
      </div>
    </>
  )
}

export default App
