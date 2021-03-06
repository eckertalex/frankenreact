import * as React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import Router from 'routes/router'
import { AuthProvider } from 'context/auth-context'
/* -------------------------------------------------------------------------- */

export default function App() {
  const { t } = useTranslation()

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s - platform.react" defaultTitle="platform.react">
        <meta name="description" content={t('App.description', 'Dashboard template written in React.')} />
      </Helmet>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </HelmetProvider>
  )
}
