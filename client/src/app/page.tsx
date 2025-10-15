import Image from "next/image"

export default function Home() {
  return (
    <div >
      <nav className="flex  justify-between items-center px-5 py-2">
        <div className="flex gap-20 ">
          <div className="flex gap-1 cursor-pointer">
            <Image src="icons/logo.svg" alt="logo" width={20} height={20} />
            <h1 className="text-lg font-medium">Collab Verge</h1>
          </div>
          <ul className="flex gap-4 items-center">
            <li className="hover:underline cursor-pointer">Hire Influencers</li>
            <li className="hover:underline cursor-pointer">Find brands</li>
            <li className="hover:underline cursor-pointer">Why us</li>
            <li className="hover:underline cursor-pointer">What’s new</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 ">
          <a className="hover:underline cursor-pointer" href="">Login</a>
          <button className="bg-primary px-4 text-white py-2 rounded-xl cursor-pointer hover:bg-primary/70">Get Started</button>
        </div>
      </nav>
      <main className="flex">
        <div>

        </div>
        <div>
        </div>
      </main>


    </div>
  );
}
