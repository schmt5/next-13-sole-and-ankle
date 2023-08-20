## Next 13 — Sole & Ankle with pocketbase

This is a part of the React course [The Joy of React](https://joyofreact.com/). It got be extends with [pocketbase](https://pocketbase.io/) as the backend.

```
const shoes = await pb.collection('shoes').getFullList({
    filter: `categories?~"${params.categorySlug}"`
});
```

## Getting started
### Backend (pocketbase)
Spin up pocketbase server

```
// Go into `database` folder
cd database

// Run pocketbase
./pocketbase serve
```
### Frontend (Nextjs 13)
In another terminal, spin up Nextjs project as usual

```
npm i
```

```
npm run dev
```



