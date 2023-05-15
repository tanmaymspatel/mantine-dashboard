import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './assets/icons/style.css'
import './index.css'
import GlobalStyles from './core/components/GlobalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider>
    <GlobalStyles />
    <App />
  </MantineProvider>,
)
