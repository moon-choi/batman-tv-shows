import Link from 'next/link'
import Header from '../components/Header';

const Index = () => (
  <div>
    <Header />
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