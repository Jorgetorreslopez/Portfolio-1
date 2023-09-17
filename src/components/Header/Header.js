import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-space-theme text-white p-4">
      <nav className="flex justify-center space-x-4">
        <div className="hover:underline">
          <Link href="/AboutMe/AboutMe">About</Link>
        </div>
        <div className="hover:underline">
          <Link href="/Projects/Projects">Projects</Link>
        </div>
        <div className="hover:underline">
          <Link href="/Contacts/Contacts">Contact</Link>
        </div>
      </nav>
      <div className="text-center mt-4">
        <h1 className="text-4xl font-semibold">Jorge Eduardo Torres Lopez</h1>
        <p className="text-lg">Full-Stack Engineer/ Web Developer/ User Experience Designer</p>
      </div>
    </header>
  );
}
