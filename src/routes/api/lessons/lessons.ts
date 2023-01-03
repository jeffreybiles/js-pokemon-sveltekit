export type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.10',
  githubUrl?: string,
  youtubeId: string,
}
export type Lesson = {
  id: string,
  number: string,
  name: string,
  demoSubdomain?: string, // only link if there's a demoSubdomain
  implementations: Implementation[],
  description?: string,
  projectedRelease?: string,
}

// TODO - go over the descriptions as I release lessons, because I'm sure I could make them better
// TODO - allow different descriptions for different frameworks.  Not sure how to display that.
export const lessons: Lesson[] = [
  {
    id: '101',
    number: '01',
    name: 'Choosing a Javascript Framework',
    demoSubdomain: 'complete',
    description: `<p>This series will build the same app in 4 different Javascript meta-frameworks - Next 13, Remix 1.10, Nuxt 3, and SvelteKit 1.0</p>
    <p>You can choose to follow only one framework, or watch multiple versions to see how they're similar and different.  If you're not sure which framework you prefer, then definitely watch all the versions of at least this first video.</p>
    <p>For this series, I recommend that you already know basic html/css/javascript.  It's also helpful to have some experience with a framework like React, Vue, or Svelte (or Angular or Ember), but not required.</p>
    <p>The demo you see behind you is the completed app.  We'll be using the SvelteKit version of the app for our demos, but they should all act the same as far as the user is concerned.</p>
`,
    implementations: [
      {
        framework: 'SvelteKit 1.0',
        youtubeId: '_FJy4yUSmfc', // note: this is not actually the video for this lesson, this is a random video
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Nuxt 3',
        youtubeId: '0W16DJeAsFM',
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Next 13',
        youtubeId: 'ypY-HuJP95k',
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Remix 1.10',
        youtubeId: 'ypY-HuJP95k',
      }
    ]
  },
  {
    id: '102',
    number: '02',
    name: 'Setting up our App',
    demoSubdomain: '02-setup',
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
        githubUrl: 'https://github.com/jeffreybiles/js-pokedex-sveltekit/commit/2b834f9b789e591a66de81d767be4ed089b88157',
        youtubeId: 'VG7U1ESkbdE',
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
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Remix 1.10',
        githubUrl: '',
        youtubeId: 'ypY-HuJP95k',
      }
    ]
  },
  {
    id: '103',
    number: '03',
    name: 'Each Loops and Objects',
    demoSubdomain: '03-each-loops',
    projectedRelease: 'January',
    description: `<p>Every app needs to display data, and it's often stored in arrays and objects.</p>
    <p>We'll use hardcoded data for now - the different generations of pokemon games.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to loop through data in the template</li>
      <li>How to reference objects</li>
      <li>How to use the pokemon generations data</li>
    </ul>
  `,
    implementations: [
      {
        framework: 'SvelteKit 1.0',
        githubUrl: 'https://github.com/jeffreybiles/js-pokedex-sveltekit/commit/4e1239dd40be8057a807d34a489ab0f81a76035e',
        youtubeId: 'i2F1YcjALfo',
      }
    ],
  },
  {
    id: '104',
    number: '04',
    name: 'Loading Data from an API',
    demoSubdomain: '04-loading-external-data',
    description: `<p>Now that we have a basic app, we'll load data from an API.  We'll use the free Pokemon API.</p>
    <p>We'll learn:</p>
    <ul>
      <li>How to load data from an external API</li>
      <li>Making SSR work using SvelteKit's 'load' function</li>
      <li>How to use pageData in the route component</li>
      <li>How to get the pokemon ID from the API data</li>
    </ul>`,
    implementations: [
      {
        framework: 'SvelteKit 1.0',
        githubUrl: 'https://github.com/jeffreybiles/js-pokedex-sveltekit/commit/0b2408df3606070e4b9d28a3f30a88f371b32b0c',
        youtubeId: 'n1oyh99Bwlg',
      }
    ],
  },
  {
    id: '105',
    number: '05',
    name: 'Styling our Pokedex',
    projectedRelease: 'January',
    // demoSubdomain: '5-styling-our-pokedex',
    implementations: [],
    description: `<p>We'll take the raw data from the pokemon API and turn it into a page that's easier to look at and understand.</p>
    <p>There aren't any new framework concepts in this video, and my CSS is not expert-level, so if you want to speedrun this course you can skip to the next lesson and pick up context from there.</p>
    <p>However, it can still be useful to see the page being built.</p>
    <p>Note: in production apps I often use tailwind, but I chose to do plain CSS for this series.</p>`,
  },
  {
    id: '106',
    number: '06',
    name: 'Links and Query Params',
    projectedRelease: 'January',
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
    id: '107',
    number: '07',
    name: 'Reactivity',
    projectedRelease: 'January',
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
    id: '108',
    number: '08',
    name: 'Reusable Components',
    projectedRelease: 'January',
    // demoSubdomain: '8-reusable-components',
    implementations: [],
    description: `
      <p>We want to display our selected monster better, so we could either copy/paste everything... or we could make a reusable component.</p>
      <p>We'll learn:</p>
      <ul>
        <li>How to create a reusable component</li>
        <li>How to pass data to a component</li>
        <li>How CSS is scoped to a component</li>
        <li>How to use slots</li>
      </ul>`
  },
  {
    id: '109',
    number: '09',
    name: 'Search Form',
    projectedRelease: 'January',
    // demoSubdomain: '9-search-form',
    implementations: [],
    description: `
      <p>We'll add a search form to our app, and use it to filter the list of monsters.</p>
      <p>We'll learn:</p>
      <ul>
        <li>How to create a form</li>
        <li>How to use a form submit to trigger a function</li>
        <li>How to filter data based on dynamic parameters</li>
      </ul>`
  },
  {
    id: '110',
    number: '10',
    name: 'Filesystem-Based Router',
    projectedRelease: 'February',
    // demoSubdomain: '10-filesystem-based-router',
    implementations: [],
    description: `
      <p>We want to add new pages to our app - an 'about' page explaining the app, and a 'my-pokemon' page showing your caught monsters.
      <p>We'll learn:</p>
      <ul>
        <li>How to add a new route</li>
        <li>How to navigate between routes</li>
        <li>The file-based router's naming scheme</li>
      </ul>`
  },
  {
    id: '111',
    number: '11',
    name: 'Layouts, Nested Routes, and "breaking out" of Layouts',
    projectedRelease: 'February',
    // demoSubdomain: '11-layouts-nested-routes',
    implementations: [],
    description:`
      <p>We want to add a navbar to our app, to make it easier to navigate between pages.</p>
      <p>We'll learn:</p>
      <ul>
        <li>How to add a layout</li>
        <li>How to add nested routes</li>
        <li>How to "break out" of a layout</li>
      </ul>
    `
  },
  {
    id: '112',
    number: '12',
    name: 'Sharing data across the app',
    projectedRelease: 'February',
    // demoSubdomain: '12-stores-writable-derived',
    implementations: [],
    // TODO: may need to make implementation-specific descriptions?  Start with regular description, then do implementation-specific?
    description: `
      <p>We want to fill out the 'my-pokemon' page in our app, to show the monsters we've caught.</p>
      <p>To do that, we'll need to track that data across components.</p>
      <p>In Svelte, this is done with 'stores', and we'll learn about writable and observable stores.</p>
      <p>In Nuxt this is done with 'composables', and we'll learn about a simple pattern to make this happen.</p>`
  },
  {
    id: '113',
    number: '13',
    name: 'Dynamic Routes',
    projectedRelease: 'February',
    // demoSubdomain: '13-dynamic-routes',
    implementations: [],
    description: `
      <p>We want to add a page to our app that shows the details of a specific monster.</p>
      <p>However, we can't add a new route for every monster - instead, we'll add one route that can handle any monster.</p>
      <p>We'll get the monster_id from the route, then use that to load the monster's data.</p>
      <p>We'll learn:</p>
      <ul>
        <li>How to add a dynamic route</li>
        <li>How to get the route params</li>
        <li>How to use the route params to load data</li>
      </ul>`
  },
  {
    id: '114',
    number: '14',
    name: 'Displaying Species Stats',
    projectedRelease: 'February',
    // demoSubdomain: '14-displaying-species-stats',
    implementations: [],
    description: `
      <p>Which pokemon is strongest?</p>
      <p>We're going to add a chart that shows the stats for each species of monster</p>
      <p>This lesson combines a lot of what we've learned instead of teaching something completel new, so we'll be going fast!</p>

    `
  },
  {
    id: '115',
    number: '15',
    name: 'Persisting Data with LocalStorage',
    projectedRelease: 'February',
    // demoSubdomain: '15-persisting-data-with-localstorage',
    implementations: [],
    description: `
      <p>We want to persist the data about which monsters we've caught, so that it's still there when we reload the page.</p>
      <p>We'll use localStorage to do this.  In a production app we'd typically use a server, but I want this tutorial to be as easy to follow as possible, and opening up a publicly-usable API means we'd need to cover authentication, which would greatly increase the size of this tutorial.</p>
      <p>We'll learn:</p>
      <ul>
        <li>How to put data into localStorage and pull it back out</li>
        <li>How to 'load up' the app-wide stores upon page load</li>
        <li>How to handle server-side rendering with localStorage - tricky, since there's no localStorage on the server!</li>
      </ul>
    `
  },
  {
    id: '116',
    number: '16',
    name: 'Individualizing Monsters',
    projectedRelease: 'March',
    // demoSubdomain: '16-individualizing-monsters',
    implementations: [],
    description: `
      <p>We want to be able to tell apart our monsters, and choose which ones to release - instead of just releasing a random one of a certain species.</p>
      <p>To do this, we'll change the way we're tracking monsters - we'll keep an array of monsters and connect them to the species with species_id.  We'll also add a random name and random ID.</p>
      <p>Using the ID, we'll be able to Create, Read, Update, and Delete specific items in the monsters array.</p>
      <p>We'll learn how to do the standard CRUD actions:</p>
      <ul>
        <li>CREATE: catch a new monster and assign a random name</li>
        <li>READ: get a specific monster from the array</li>
        <li>UPDATE: rename a specific monster, assigning it a new random name</li>
        <li>DELETE: release a specific monster</li>
      </ul>`
  },
  {
    id: '117',
    number: '17',
    // TODO - make this generic.  How?  Hard
    name: 'Form actions, use:enhance, and goto',
    projectedRelease: 'March',
    // demoSubdomain: '17-form-actions-use-enhance-goto',
    implementations: [],
    description: `
      <p>SvelteKit wants us to use forms in the 'classic' way, like we did before SPAs became popular</p>
      <p>However, we want to use forms in the 'modern' way, where we can submit the form and have the page update without a full page reload.</p>
      <p>We'll learn how combine the best of both worlds with Form Actions, the 'use:enhance' directive, the 'goto' action.</p>
    `,
  },
  {
    id: '118',
    number: '18',
    name: 'Caught Monster Page',
    projectedRelease: 'March',
    // demoSubdomain: '18-caught-monster-page',
    implementations: [],
    description: `
      <p>We want to add a page to our app that shows the details of a specific caught monster.</p>
      <p>We'll create a new nested route with the monster ID, and then use the Stats component to display the monster's stats.</p>
      <p>We'll expand the Monster data and Stats to use a monster's 'nature', which causes one stat to increase by 10% and another to decrease by 10%.</p>
    `
  },
  {
    id: '119',
    number: '19',
    name: 'Renaming Monsters',
    projectedRelease: 'March',
    // demoSubdomain: '19-renaming-monsters',
    implementations: [],
    description: `
      <p>We want to be able to rename our monsters.</p>
      <p>We'll add a form to our monster detail page, and use what we've learned so far to make it a smooth experience.</p>`
  },
  {
    id: '120',
    number: '20',
    name: 'Error Routes and other techniques',
    projectedRelease: 'March',
    // demoSubdomain: '20-error-routes',
    implementations: [],
    description: `
      <p>What happens when things go wrong?</p>
      <p>We'll show two ways to handle errors:</p>
      <p>In the first, we'll use the '+error' route to show a custom error page.  This is good for catching things that happen in the loader and form actions.</p>
      <p>In the second, we'll handle an error that happens in the frontend code.</p>`
  },
  {
    id: '121',
    number: '21',
    name: 'Animating our monsters',
    projectedRelease: 'March',
    // demoSubdomain: '21-animating-monsters',
    implementations: [],
    description: `
      <p>Let's add some animations to our app!</p>
    `
  },
  {
    id: '122',
    number: '22',
    name: 'Deploying our app',
    projectedRelease: 'March',
    // demoSubdomain: '22-deploying-our-app',
    implementations: [],
    description: `
      <p>Now that we've built our app, let's deploy it!</p>
      <p>We'll use Vercel to deploy our app, although there are lots of other fantastic hosting providers out there.</p>
    `
  }
]