import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './assets/icons/style.css'
import './index.css'
import GlobalStyles from './core/components/GlobalStyles.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MantineProvider theme={{
      colors: {
        darkBlue: ['#101422'],
        mantis: ['#6ACB6D'],
        seaColor: ['#50CAC2'],
        quickSilver: ['#9DA4AD']
      }
    }}>
      <GlobalStyles />
      <App />
    </MantineProvider>,
  </BrowserRouter>
)
