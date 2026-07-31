import nextConfig from 'eslint-config-next'

const config = [
  ...nextConfig,
  {
    rules: {
      '@next/next/no-img-element': 'warn',
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default config
