import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{fontWeight: 700}}>📞 BureauFlow Docs</span>,
  project: {
    link: 'https://github.com/TomSub7/bureauflow-app',
  },
  chat: {
    link: 'mailto:info@bureauflow.de',
  },
  docsRepositoryBase: 'https://github.com/TomSub7/bureauflow-docs',
  footer: {
    text: '© 2026 Bureao Flow GmbH — bureauflow.de',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BureauFlow Dokumentation" />
      <meta property="og:description" content="Alles über Ihren KI-Telefonassistenten" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BureauFlow Docs'
    }
  },
}

export default config
