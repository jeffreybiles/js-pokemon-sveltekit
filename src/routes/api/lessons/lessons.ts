export type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.10',
  githubUrl: string,
  youtubeId: string,
}
export type Lesson = {
  number: string,
  name: string,
  demoSubdomain?: string, // only link if there's a demoSubdomain
  implementations: Implementation[],
  description?: string,
  projectedRelease?: string,
}

export const lessons: Lesson[] = [
  {
    number: '01',
    name: 'Choosing a Javascript Framework',
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
    number: '02',
    name: 'Setting up our App',
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
    number: '03',
    name: 'Each Loops and Objects',
    demoSubdomain: '3-each-loops-objects',
    projectedRelease: 'January 22',
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
    number: '04',
    name: 'Loading Data from an API',
    projectedRelease: 'January 22',
    // demoSubdomain: '4-loading-data',
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
    number: '05',
    name: 'Styling our Pokedex',
    projectedRelease: 'January 22',
    // demoSubdomain: '5-styling-our-pokedex',
    implementations: [],
    description: `<p>We'll take the raw data from the pokemon API and turn it into a page that's easier to look at and understand.</p>
    <p>There aren't any new framework concepts in this video, and my CSS is not expert-level, so if you want to speedrun this course you can skip to the next lesson and pick up context from there.</p>
    <p>However, it can still be useful to see the page being built.</p>
    <p>Note: in production apps I often use tailwind, but I chose to do plain CSS for this series.</p>`,
  },
  {
    number: '06',
    name: 'Links and Query Params',
    projectedRelease: 'January 29',
    // demoSubdomain: '6-links-query-params',
    implementations: [],
    description: `<p>Load pokemon data for a specific generation, or for all generations.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to use links to navigate between pages</li>
      <li>How to use query params to change our load function</li>
    </ul>`,
  },
  {
    number: '07',
    name: 'Reactivity',
    projectedRelease: 'February 5',
    // demoSubdomain: '7-reactivity',
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
    number: '08',
    name: 'Reusable Components',
    projectedRelease: 'February 12',
    // demoSubdomain: '8-reusable-components',
    implementations: [],
  },
  {
    number: '09',
    name: 'Search Form',
    projectedRelease: 'February 19',
    // demoSubdomain: '9-search-form',
    implementations: [],
  },
  {
    number: '10',
    name: 'Filesystem-Based Router',
    projectedRelease: 'February 26',
    // demoSubdomain: '10-filesystem-based-router',
    implementations: [],
  },
  {
    number: '11',
    name: 'Layouts, Nested Routes, and "breaking out" of Layouts',
    projectedRelease: 'March 5',
    // demoSubdomain: '11-layouts-nested-routes',
    implementations: [],
  },
  {
    number: '12',
    name: 'Writable and Derived Stores',
    projectedRelease: 'March 12',
    // demoSubdomain: '12-stores-writable-derived',
    implementations: [],
  },
  {
    number: '13',
    name: 'Dynamic Routes',
    projectedRelease: 'March 19',
    // demoSubdomain: '13-dynamic-routes',
    implementations: [],
  },
  {
    number: '14',
    name: 'Displaying Species Stats',
    projectedRelease: 'March 26',
    // demoSubdomain: '14-displaying-species-stats',
    implementations: [],
  },
  {
    number: '15',
    name: 'Persisting Data with LocalStorage',
    projectedRelease: 'April 2',
    // demoSubdomain: '15-persisting-data-with-localstorage',
    implementations: [],
  },
  {
    number: '16',
    name: 'Individualizing Monsters',
    projectedRelease: 'April 9',
    // demoSubdomain: '16-individualizing-monsters',
    implementations: [],
  },
  {
    number: '17',
    name: 'Form actions, use:enhance, and goto',
    projectedRelease: 'April 16',
    // demoSubdomain: '17-form-actions-use-enhance-goto',
    implementations: [],
  },
  {
    number: '18',
    name: 'Caught Monsters Page',
    projectedRelease: 'April 23',
    // demoSubdomain: '18-caught-monsters-page',
    implementations: [],
  },
  {
    number: '19',
    name: 'Renaming Monsters',
    projectedRelease: 'April 30',
    // demoSubdomain: '19-renaming-monsters',
    implementations: [],
  },
  {
    number: '20',
    name: 'Error Routes and other techniques',
    projectedRelease: 'May 7',
    // demoSubdomain: '20-error-routes',
    implementations: [],
  },
  {
    number: '21',
    name: 'Animating our monsters',
    projectedRelease: 'May 14',
    // demoSubdomain: '21-animating-monsters',
    implementations: [],
  },
  {
    number: '22',
    name: 'Deploying our app',
    projectedRelease: 'May 21',
    // demoSubdomain: '22-deploying-our-app',
    implementations: [],
  }
]