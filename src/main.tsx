import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/tailwind.scss'
import './assets/scss/app.scss'

import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { HelmetProvider } from 'react-helmet-async'
import AppWrapper from './AppWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <AppWrapper />
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)