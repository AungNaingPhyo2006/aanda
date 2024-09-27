import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#00008B] font-bold font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="mb-2 text-[#FFFF00] self-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          မင်္ဂလာဦး ဆွမ်းကျွေး ဖိတ်ကြားလွှာ
        </h1>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-white/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-pink-500 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/about">
          ကြည့်ရှုမည်
        </Link>
        </div>
      
      </main>
    </div>
  );
}
