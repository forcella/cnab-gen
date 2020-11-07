import Routes from './routes'
import { Cnab150Provider } from "./provider/cnab150Provider/provider"

function App() {
  return (
    <Cnab150Provider>
      <Routes />
    </Cnab150Provider>
  );
}

export default App;
