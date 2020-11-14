import Routes from './routes'
import { Cnab150Provider } from './provider/cnab150Provider/provider'
import './App.css'

function App () {
  return (
    <Cnab150Provider>
      <Routes />
    </Cnab150Provider>
  )
}

export default App
