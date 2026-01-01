import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StairCase from './components/common/StairCase.jsx'
import NavPage from './Pages/NavPage.jsx'
import Context from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<StairCase>
    <Context>
          <App />
    </Context>
       
</StairCase>

</BrowserRouter>

 
)
