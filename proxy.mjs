import { initializeAuthProxy } from '@propelauth/auth-proxy'
await initializeAuthProxy({
    authUrl: "https://7095834213.propelauthtest.com",
    integrationApiKey: "f61d08d6109005aef690a80c3d5b01c587ac56676e8d86e864da53b4e8b9066a0ef375de0ae0848458102e6616c76847",
    proxyPort: 8000,
    urlWhereYourProxyIsRunning: 'http://localhost:8000',
    target: {
        host: 'localhost',
        port: 8501,
        protocol: 'http:',
        // Ensure you specify the correct target URL after login
        redirectUrlAfterLogin: 'http://localhost:8501', 
    },
})

