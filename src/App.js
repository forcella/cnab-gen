import Routes from './routes'
import { Cnab150Provider } from "./pages/Cnab150/context"


function App() {
  return (
    <Cnab150Provider>
      <Routes />
    </Cnab150Provider>
  );
}

export default App;
