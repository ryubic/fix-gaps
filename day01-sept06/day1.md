# Day 1 – GitHub Repo Fetcher

## Objective
- Build a GitHub Repo Fetcher using JS, fetch API, and DOM manipulation.
- Track progress in mega-repo and deploy live on GitHub Pages.

## What I Learned
- Async JS + Promises + async/await
- fetch() API and converting JSON
- DOM manipulation (createElement, innerText, appendChild)
- Error handling (try/catch, response.ok)
- Git basics: init, add, commit, push

## Project Output
- Entered 'torvalds' → fetched profile + repos successfully.
- Non-existing username → displayed error message.

## Challenges & Solutions
- Clearing previous results before showing new data → solved by removing child nodes before appending new elements.
- Handling 404 errors → used response.ok check.

## Next Steps / Improvements
- Add minimal CSS for readability.
- Show repo descriptions or limit repos displayed.
