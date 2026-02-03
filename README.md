# Junior Frontend Test

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

Welcome to the &why Coding Challenge 👋 To get started:

- Install the packages with `pnpm install` or `npm install`
- Run the development server with `pnpm run dev` or `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
- Create a feature branch where you work and commit your changes.

(You can also use other package manager if you like)

## 📋 Overview

Goal of this challenge is to get an impression of how you approach and solve a simple task.

- The task is open-ended and there's no need to finish everything. Just show us what you achieved within the given time.

- Usage of AI coding assistants is okay, but make sure to have an understanding of all code you commit. We will ask you technical questions about the code in the interview.

💡 Less code that you can explain is better than a lot of code where you are unsure how it works in detail.

When you are done, please create a PR in the repository including a short description

## 🎯 Task

Display a grid of music search results (artists, albums, songs) with the name and an image if available. Feel free to also display other information returned in the API response.

Here is a Figma file with a basic mockup: https://www.figma.com/design/QaAUTjri39HPaSUTEoMfWQ/Cat-Grid?node-id=282-53

The mockup serves as a basic idea of the grid. Feel free to style it in a way that you think makes sense.

### ✅ Base steps

- Fetch data from the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1)

  - Example request: `https://itunes.apple.com/search?media=music&entity=musicArtist,album,song&term={your+search+term}`
  - Fetching should be done in a Next.js [server component](https://nextjs.org/docs/app/getting-started/fetching-data)

- Render the items as cards in a grid layout. The layout should be responsive and work on desktop and mobile screen sizes.
- Style the card and the grid.

### ⭐ Additional steps

Pick tasks from the following list that you consider relevant or interesting to you:

- Add more styling or animations. (Hover, Appear on page load,etc.). You can use [Motion](https://motion.dev/) or plain tailwind.
- Add a search bar for plaintext search. The search could trigger automatically as the user types (debounced), without requiring a button click.
- Add a filter row to allow the user to filter:

  - Filtering e.g. by entity type filter (artist, album, song) — use the API's `entity` parameter
  - Explicit content checkbox (defaults to unchecked/hidden) — use the API's `explicit` parameter
  - Think about routing and search params.

- Implement sorting by name (alphabetical ascending/descending). The user should be able to toggle this via a button.

- Clicking on a card opens a detail page or detail view with more information. For example, clicking an album shows a page with all its songs. You could render different things depending on the entity type. Think about routing for the detail view.

## 🛠️ Technologies to use

- This is a next.js/react app, so please write react components and rely on next.js features
- Styling is preferrably done in [tailwind](https://tailwindcss.com/). If necessary you can fall back to css approaches.
- Feel free to use anything else that helps you. (Maybe [shadcn](https://ui.shadcn.com/) or [motion](https://motion.dev/))
- Your code should respect eslint and prettier.
- Commit your changes with git and provide meaningfull commit messages.
