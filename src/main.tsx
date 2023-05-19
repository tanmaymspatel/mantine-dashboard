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
        quickSilver: ['#9DA4AD'],
        raspberryPink: ['#dc5b9c'],
        sandyBworn: ['f7a651'],
        pitconBlue: ['45ABF7'],
        tuftsBlue: ['4198E0']
      }
    }}>
      <GlobalStyles />
      <App />
    </MantineProvider>,
  </BrowserRouter>
)
