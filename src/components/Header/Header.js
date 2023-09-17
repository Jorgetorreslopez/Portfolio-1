import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-space-theme text-white p-4">
      <nav className="flex justify-center space-x-4">
        <div className="hover:underline">
          <Link href="#AboutMe">About</Link>
        </div>
        <div className="hover:underline">
          <Link href="#projects">Projects</Link>
        </div>
        <div className="hover:underline">
          <Link href="#contacts">Contact</Link>
        </div>
      </nav>
      <div className="text-center mt-4">
        <h1 className="text-4xl font-semibold">Your Name</h1>
        <p className="text-lg">Front-end Developer</p>
      </div>
    </header>
  );
}
