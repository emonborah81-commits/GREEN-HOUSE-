import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ed] text-[#143b2b]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c5a56a] bg-[#143b2b] text-white font-black">
            GH
          </div>
          <div>
            <p className="font-black tracking-widest">GREEN HOUSE</p>
            <p className="text-xs text-gray-500">SPORTS & CULTURAL WEEK</p>
          </div>
        </div>
      </nav>

      <section className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-12 text-center md:pt-24">
        <div className="mb-8 flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#c5a56a] bg-[#143b2b] shadow-xl">
          <div className="rounded-full border border-white/30 px-8 py-7 text-center">
            <span className="text-4xl font-black tracking-widest text-white">
              GH
            </span>
            <p className="mt-2 text-xs tracking-widest text-[#c5a56a]">
              GREEN HOUSE
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-xs font-bold uppercase tracking-[0.25em] text-[#1f6b4a] sm:text-sm">
          REV. WILLIAM WARD SENIOR SECONDARY SCHOOL
        </p>

        <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">
          GREEN
          <span className="block text-[#1f6b4a]">HOUSE</span>
        </h1>

        <div className="my-8 h-1 w-24 rounded-full bg-[#c5a56a]" />

        <h2 className="text-xl font-semibold sm:text-3xl">
          SPORTS & CULTURAL WEEK
        </h2>

        <p className="mt-6 max-w-xl text-lg italic text-[#1f6b4a] sm:text-xl">
          UNITED IN STRENGTH.
          <br />
          UNSTOPPABLE IN SPIRIT.
        </p>

        <p className="mt-6 max-w-xl leading-7 text-gray-600">
          Welcome to the official Green House participation portal.
          Register for sports and cultural events and be a part
          of our house spirit.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-4">
          <Link
            href="/register"
            className="rounded-xl bg-[#143b2b] px-6 py-4 font-bold tracking-wide text-white shadow-lg transition hover:bg-[#1f6b4a]"
          >
            REGISTER FOR EVENTS
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-[#143b2b]/20 bg-white px-6 py-4 font-semibold transition hover:bg-[#e8eee8]"
          >
            HOUSE MANAGEMENT LOGIN
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#143b2b]/10 px-5 py-8 text-center">
        <p className="text-sm font-bold tracking-widest text-[#1f6b4a]">
          GREEN HOUSE
        </p>
        <p className="mt-2 text-xs text-gray-500">
          REV. WILLIAM WARD SENIOR SECONDARY SCHOOL
        </p>
        <p className="mt-3 text-xs text-gray-400">
          UNITED IN STRENGTH. UNSTOPPABLE IN SPIRIT.
        </p>
      </footer>
    </main>
  );
}
