import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>BureauFlow Docs</strong>,
  project: {
    link: 'https://github.com/TomSub7/bureauflow-app',
  },
  docsRepositoryBase: 'https://github.com/TomSub7/bureauflow-docs',
  footer: {
    text: '© 2025 Bureao Flow GmbH',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BureauFlow Dokumentation" />
      <meta property="og:description" content="Dokumentation für BureauFlow KI-Telefonassistent" />
      <title>BureauFlow Dokumentation</title>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – BureauFlow Docs'
    }
  },
}

export default config
