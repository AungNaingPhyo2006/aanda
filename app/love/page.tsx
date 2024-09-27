import Link from 'next/link';

export default function Love() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFD700] to-[#FFA500] p-2">
    <div className="bg-white/80 p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto h-[90vh] scrollbar-hide">

      {/* Scrollable Content */}
      {/* Wedding Plan Details */}
      <div className="text-center space-y-4 mt-6">
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ဆေးပေးမီးယူ</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ဘုရားသွား ကျောင်းတက်</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ကြင်နာဖော် ကြင်နာဖက်နဲ့</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">လက်တွဲဖို့ ရည်ရွယ်ခဲ့တဲ့ ကိုယ့်ရဲ့ဆန္ဒလေးတစ်ခု</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">မင်းနဲ့တွေ့မှ ပြည့်ခဲ့ပြီ....။</p>

      <div className='h-4'/>
        <div className="mt-1">
        <Link className="bg-[#462048] font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600" href="/">နောက် သို့...</Link>
        </div>
      <div className='h-4'/>
      </div>
    </div>
  </div>
  );
}