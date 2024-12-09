
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from './Pages/TelaInicial/TelaInicial'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<TelaInicial/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
