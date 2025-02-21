import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full absolute top-0 z-10 py-2 bg-gradient-to-b from-slate-900">
      <nav className="container flex justify-between mx-auto items-center text-white">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image
              src="https://cdn-icons-png.freepik.com/256/16000/16000950.png?semt=ais_hybrid"
              width={64}
              height={64}
              alt="icon"
            />
          </Link>

          <ul className="hidden lg:flex gap-16 ">
            <li className="">
              <Link href="/edit" className="">
                Edit
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                Header Link 2
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                Header Link 3
              </Link>
            </li>
            <li className="">
              <Link href="" className="">
                Header Link 4
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/auth">Sign up</Link>
      </nav>
    </header>
  );
};

export default Header;
