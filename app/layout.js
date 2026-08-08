import './globals.css'

export const metadata = {
  title: 'CARMETRA AI | Private AI Automation für Schweizer KMU',
  description: 'Massgeschneiderte KI-Agenten, Prozessautomatisierung und lokale KI-Lösungen für Unternehmen.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
