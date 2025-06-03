import React from 'react'
import ReactDOM from 'react-dom/client'
import { MsalProvider } from '@azure/msal-react'
import { PublicClientApplication } from '@azure/msal-browser'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'
import { msalConfig, GOOGLE_CLIENT_ID } from './config/auth'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap 樣式

const msalInstance = new PublicClientApplication(msalConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </MsalProvider>
  </React.StrictMode>,
)
