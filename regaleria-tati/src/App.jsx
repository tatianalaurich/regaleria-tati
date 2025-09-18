import './App.css'
import { itemlistcontainer } from './components/itemlistcontainer'
import { navbar } from './components/navbar'

function App() {
  return (
    <>
    <navbar />
    <itemlistcontainer saludo="Bienvenidos!" />
    </>
  );
}

export default App
