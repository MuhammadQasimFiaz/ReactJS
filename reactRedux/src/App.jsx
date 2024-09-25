import './App.css'
import Coin from './features/coin/Coin'
import Counter from './features/counter/Counter'
import Theme from './features/theme/Theme'
import { useSelector } from 'react-redux'

function AppContent() {
  const bgcolor = useSelector((state) => state.theme.bgColor);

  return (
    <div
      style={{ background: bgcolor }}
      className="h-screen flex justify-center flex-col p-10"
    >
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}



function App() {
  
  return (
    <div>
      <AppContent />
    </div>
  )
}

export default App
