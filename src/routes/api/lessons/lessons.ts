export type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.10',
  githubUrl: string,
  youtubeId: string,
}
export type Lesson = {
  name: string,
  demoSubdomain?: string, // only link if there's a demoSubdomain
  implementations: Implementation[],
  description?: string,
}

export const lessons: Lesson[] = [
  {
    name: 'Lesson 01 - Choosing a Javascript Framework',
    demoSubdomain: '1-choosing-a-framework',
    description: `<p>This series will build the same app in 4 different Javascript meta-frameworks - Next 13, Remix 1.10, Nuxt 3, and SvelteKit 1.0</p>
    <p>You can choose to follow only one framework, or watch multiple versions to see how they're similar and different.  If you're not sure which framework you prefer, then definitely watch all the versions of at least this first video.</p>
    <p>For this series, I recommend that you already know basic html/css/javascript.  It's also helpful to have some experience with a framework like React, Vue, or Svelte (or Angular or Ember), but not required.</p>
    <p>The demo you see behind you is the completed app.  We'll be using the SvelteKit version of the app for our demos, but they should all act the same as far as the user is concerned.</p>
`,
    implementations: [
      {
        framework: 'SvelteKit 1.0',
        githubUrl: 'https://github.com/jeffreybiles/evil-commerce/commits/lesson-01',
        youtubeId: '_FJy4yUSmfc', // note: this is not actually the video for this lesson, this is a random video
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Nuxt 3',
        githubUrl: '',
        youtubeId: '0W16DJeAsFM',
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Next 13',
        githubUrl: '',
        youtubeId: 'ypY-HuJP95k',
      },
      {
        framework: 'Remix 1.10',
        githubUrl: '',
        youtubeId: 'ypY-HuJP95k',
      }
    ]
  },
  {
    name: 'Lesson 02 - Setting up our App',
    demoSubdomain: '2-setting-up-our-app',
    description: `<p>We'll get our app set up with our chosen framework, then go over the basics of how the pregenerated code works.</p>
    <p>We'll be using TypeScript, but you can follow along in Javascript simply by removing the type annotations.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to set up a new app</li>
      <li>How to run the app</li>
      <li>How html, css, and javsacript work together</li>
      <li>How to change data in the route component</li>
    </ul>`,
    implementations: [
      {
        framework: 'SvelteKit 1.0',
        githubUrl: 'https://github.com/jeffreybiles/evil-commerce/commits/lesson-01',
        youtubeId: '_FJy4yUSmfc', // note: this is not actually the video for this lesson, this is a random video
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Nuxt 3',
        githubUrl: '',
        youtubeId: '0W16DJeAsFM',
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Next 13',
        githubUrl: '',
        youtubeId: 'ypY-HuJP95k',
      },
      {
        framework: 'Remix 1.10',
        githubUrl: '',
        youtubeId: 'ypY-HuJP95k',
      }
    ]
  },
  {
    name: 'Lesson 03 - Each Loops and Objects',
    demoSubdomain: '3-each-loops-objects',
    description: `<p>Every app needs to display data, and it's often stored in arrays and objects.</p>
    <p>We'll use hardcoded data for now - the different generations of pokemon games.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to loop through data in the template</li>
      <li>How to reference objects</li>
      <li>What happens if you try to display a full object in the template</li>
    </ul>
  `,
    implementations: [],
  },
  {
    name: 'Lesson 04 - Loading Data from an API',
    demoSubdomain: '4-loading-data',
    description: `<p>Now that we have a basic app, we'll load data from an API.  We'll use the free Pokemon API.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to load data from an API</li>
      <li>How to get the pokemon ID and image url from the index data</li>
      <li>Using the loaded data in our template</li>
    </ul>`,
    implementations: [],
  },
  {
    name: 'Lesson 05 - Styling our Pokedex',
    demoSubdomain: '5-styling-our-pokedex',
    implementations: [],
    description: `<p>We'll take the raw data from the pokemon API and turn it into a page that's easier to look at and understand.</p>
    <p>There aren't any new framework concepts in this video, and my CSS is not expert-level, so if you want to speedrun this course you can skip to the next lesson and pick up context from there.</p>
    <p>However, it can still be useful to see the page being built.</p>
    <p>Note: in production apps I often use tailwind, but I chose to do plain CSS for this series.</p>`,
  },
  {
    name: 'Lesson 06 - Links and Query Params',
    demoSubdomain: '6-links-query-params',
    implementations: [],
    description: `<p>Load pokemon data for a specific generation, or for all generations.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to use links to navigate between pages</li>
      <li>How to use query params to change our load function</li>
    </ul>`,
  },
  {
    name: 'Lesson 07 - Reactivity',
    demoSubdomain: '7-reactivity',
    implementations: [],
    description: `<p>Reactive data is a cornerstone of interactive web apps.  Without it, we'd be reloading pages or updating all the different parts of our app manually.</p>
    <p>In this video we'll select a specific monster, catch multiple monsters, and track how much total HP our caught monsters have.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to create and use reactive properties</li>
      <li>How to compute/derive properties</li>
      <li>How to 'watch' properties and take action when they change</li>
    </ul>`,
  },
  {
    name: 'Lesson 08 - Reusable Components',
    demoSubdomain: '8-reusable-components',
    implementations: [],
  },
  {
    name: 'Lesson 09 - Search Form',
    demoSubdomain: '9-search-form',
    implementations: [],
  },
  {
    name: 'Lesson 10 - Filesystem-Based Router',
    demoSubdomain: '10-filesystem-based-router',
    implementations: [],
  },
  {
    name: 'Lesson 11 - Layouts, Nested Routes, and "breaking out" of Layouts',
    demoSubdomain: '11-layouts-nested-routes',
    implementations: [],
  },
  {
    name: 'Lesson 12 - Writable and Derived Stores',
    demoSubdomain: '12-stores-writable-derived',
    implementations: [],
  },
  {
    name: 'Lesson 13 - Dynamic Routes',
    demoSubdomain: '13-dynamic-routes',
    implementations: [],
  },
  {
    name: 'Lesson 14 - Displaying Species Stats',
    demoSubdomain: '14-displaying-species-stats',
    implementations: [],
  },
  {
    name: 'Lesson 15 - Persisting Data with LocalStorage',
    demoSubdomain: '15-persisting-data-with-localstorage',
    implementations: [],
  },
  {
    name: 'Lesson 16 - Individualizing Monsters',
    demoSubdomain: '16-individualizing-monsters',
    implementations: [],
  },
  {
    name: 'Lesson 17 - Form actions, use:enhance, and goto',
    demoSubdomain: '17-form-actions-use-enhance-goto',
    implementations: [],
  },
  {
    name: 'Lesson 18 - Caught Monsters Page',
    demoSubdomain: '18-caught-monsters-page',
    implementations: [],
  },
  {
    name: 'Lesson 19 - Renaming Monsters',
    demoSubdomain: '19-renaming-monsters',
    implementations: [],
  },
  {
    name: 'Lesson 20 - Error Routes and other techniques',
    demoSubdomain: '20-error-routes',
    implementations: [],
  },
  {
    name: 'Lesson 21 - Animating our monsters',
    demoSubdomain: '21-animating-monsters',
    implementations: [],
  },
  {
    name: 'Lesson 22 - Deploying our app',
    demoSubdomain: '22-deploying-our-app',
    implementations: [],
  }
]