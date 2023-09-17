import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href="/" passHref>
        Home
      </Link>
      <Link href="/MainPage/MainPage" passHref>
        Main Page
      </Link>
    </nav>
  );
}

export default Navigation;
