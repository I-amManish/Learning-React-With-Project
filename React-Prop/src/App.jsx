import Student from './Student.jsx'
import './App.css'

function App() {
  

  return (
    <>
      <Student name="Okey Dokey" age={21} isStudnet={true} />
      <Student name="Vincenzo Cassano" age={22} isStudnet={false} />
      <Student name="CupCake" age={19} isStudnet={false} />
      <Student name="Hunter" age={20} isStudnet={false} />
      <Student/>
    </>
  )
}

export default App
