```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}

// pages/about/[slug].js
export default function About({ params }) {
  return (
    <div>
      <h1>About {params.slug}</h1>
    </div>
  );
}
```