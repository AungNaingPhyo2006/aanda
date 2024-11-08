import Link from 'next/link';

export default function Love() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#00008B] font-bold font-[family-name:var(--font-geist-sans)] ">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#FFFDD0]">ဆေးပေးမီးယူ</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#FFFDD0]">ဘုရားသွား ကျောင်းတက်</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#FFFDD0]">ကြင်နာဖော် ကြင်နာဖက်နဲ့</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#FFFDD0]">လက်တွဲဖို့ ရည်ရွယ်ခဲ့တဲ့</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#FFFDD0]">ကိုယ့်ရဲ့ဆန္ဒလေးတစ်ခု</p>
         <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#FFFDD0]">မင်းနဲ့တွေ့မှ ပြည့်ခဲ့ပြီ....။</p>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
      {/* <Link
        className="rounded-full border border-solid border-white/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-pink-500 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        href="/about">
        ကြည့်ရှုမည်
      </Link> */}
      <Link className="rounded-full border border-solid border-white hover:bg-pink-500 hover:border-transparent  font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600" href="/">Back</Link>
      </div>
    </main>
  </div>

  //   <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFD700] to-[#FFA500] p-2">
  //   <div className="bg-white/80 p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto h-[90vh] scrollbar-hide">

  //     <div className="text-center space-y-4 mt-6">
  //         <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ဆေးပေးမီးယူ</p>
  //         <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ဘုရားသွား ကျောင်းတက်</p>
  //         <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ကြင်နာဖော် ကြင်နာဖက်နဲ့</p>
  //         <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">လက်တွဲဖို့ ရည်ရွယ်ခဲ့တဲ့</p>
  //         <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ကိုယ့်ရဲ့ဆန္ဒလေးတစ်ခု</p>
  //         <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">မင်းနဲ့တွေ့မှ ပြည့်ခဲ့ပြီ....။</p>

  //     <div className='h-4'/>
  //       <div className="mt-1">
  //       <Link className="bg-[#462048] font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600" href="/">Back</Link>
  //       </div>
  //     <div className='h-4'/>
  //     </div>
  //   </div>
  // </div>
  );
}