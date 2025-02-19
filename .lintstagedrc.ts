import type { Configuration } from 'lint-staged'

const config: Configuration = {
  '*.{js,jsx,ts,tsx}': filenames => {
    const files = filenames.map(file => `"${file}"`).join(' ')
    return [`eslint --fix ${files}`, `prettier --write ${files}`]
  }
}

export default config
