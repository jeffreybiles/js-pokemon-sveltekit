export type FrameworkName = 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.10'

export const frameworks: {[key in FrameworkName]: {icon: string, color: string}} = {
  'SvelteKit 1.0': {
    icon: 'vscode-icons:file-type-svelte',
    color: '#FF3E00'
  },
  'Nuxt 3': {
    icon: 'vscode-icons:file-type-nuxt',
    color: '#38C032'
  },
  'Next 13': {
    icon: 'logos:nextjs-icon',
    color: '#3238C0'
  },
  'Remix 1.10': {
    icon: 'logos:remix-icon',
    color: '#FF4D5B'
  },

}

const frameworkKeys = Object.keys(frameworks) as FrameworkName[]
export const frameworkArray = frameworkKeys.map((name: FrameworkName) => {
  return {
    name,
    ...frameworks[name]
  }
})