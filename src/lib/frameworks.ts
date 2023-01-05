export type FrameworkName = 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.10'
type FrameworkProperties = {
  icon: string
  color: string
  lightColor?: string
  darkColor?: string
  slug: string
}
type Framework = FrameworkProperties & {
  name: FrameworkName
}

export const frameworks: {[key in FrameworkName]: FrameworkProperties} = {
  'SvelteKit 1.0': {
    icon: 'vscode-icons:file-type-svelte',
    color: '#FF3E00',
    lightColor: '#FF9E90',
    darkColor: '#B22A00',
    slug: 'sveltekit-1',
  },
  'Nuxt 3': {
    icon: 'vscode-icons:file-type-nuxt',
    color: '#38C032',
    lightColor: '#8EE09E',
    darkColor: '#2B8A24',
    slug: 'nuxt-3',
  },
  'Next 13': {
    icon: 'logos:nextjs-icon',
    color: '#3238C0',
    lightColor: '#8E90FF',
    darkColor: '#242B8A',
    slug: 'next-13',
  },
  'Remix 1.10': {
    icon: 'logos:remix-icon',
    color: '#FF4D5B',
    lightColor: '#FF9E9E',
    darkColor: '#B22A37',
    slug: 'remix-1-10',
  },

}

const frameworkKeys = Object.keys(frameworks) as FrameworkName[]
export const frameworkArray: Framework[] = frameworkKeys.map((name: FrameworkName) => {
  return {
    name,
    ...frameworks[name]
  }
})