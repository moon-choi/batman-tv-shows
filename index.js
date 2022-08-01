import Link from 'next/link'

const Index = () => (
  <div>
    <h1>
      안녕, Next.js
    </h1>
    <h2>
      <Link href="/about">
        <div style={{ background: 'black', color: 'white' }}>소개</div>
      </Link>
    </h2>
  </div>
);

export default Index;