This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm run dev
# or
yarn dev
``` 

 
  
  
  
add .env file with variable: 

```bash
NEXT_PUBLIC_BASE_URL=https://api.tvmaze.com 
```

 

 
run jest tests
 
  ```bash
pnpm jest
``` 


 
run e2e tests (playwright)
```bash 
npx playwright test
```

estimates: 

```
start project - 3h
main work: - create and connect api 1h
           - create pages 6h
           - adaptive to mobile 3h
           - add image preloader 1h
           - create pagination 1h
install and set test configuration - 1h
test - 3h
  ```
  
  notes and peculiarities:
  
  ```
  According to the task: "The first layout should use the “Schedule” API" 
  (https://www.tvmaze.com/api#schedule) which doesn't provide any 
  appropriate info to implement pagination as it should be. We are not
  aware of pages for the current endpoint or its total number of items. 
  The scheduled shows date was chosen as a pagination unit to implement
  the Home page pagination. 
  ```





Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# nada-tv-test
