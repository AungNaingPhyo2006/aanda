import Link from 'next/link';

export default function Love() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFD700] to-[#FFA500] p-2">
    <div className="bg-white/80 p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto h-[90vh] scrollbar-hide">

      {/* Scrollable Content */}
      {/* Wedding Plan Details */}
      <div className="text-center space-y-4 mt-6">
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">တကယ်ချစ်ဖို့ပဲ လိုတာပါ။ တကယ်ချစ်ရင် သူ့ခေါင်းလေးကိုပုတ် ဆံပင်လေးကို သပ်ပေးတာကအစ ကမ္ဘာတစ်ခြမ်းကို ပိုင်ဆိုင်ခွင့်ရလိုက်သလို...</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">သူ့နဖူးကို ခပ်ဖွဖွ နမ်းလိုက်တာနဲ့တင် ကိုယ်ဟာ သူ့ဘဝရဲ့ အရှင်သခင်တစ်ပါး....</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">သူနှာစေး ချောင်းဆိုးတာလေးဟာ ကိုယ့်အတွက် တတိယကမ္ဘာစစ်...</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#4C5933]">ချစ်ခြင်းသာ မှန်ပါစေ...ကိုယ့်အပေါ် စိုးရိမ်တကြီး ကြည့်လိုက်တဲ့ အကြည့်လေးကအစ ဘယ်သူမှ မရနိုင်တဲ့ အကောင်းဆုံး လက်ဆောင်ပါ....။</p>
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