import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center items-center text-white">
      <div className="w-full max-w-[400px] mx-auto">
        <h1 className="text-3xl mb-4">Your Journal</h1>
        <p className="text-xl text-white/50 mb-4">Write down your thoughts, track your mood </p>
        <div>
          <Link href="/journal">
          <button className="bg-slate-400 hover:bg-slate-800 text-white/50 hover:text-white/70 p-2 rounded-md text-xl">Get Started Today</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
