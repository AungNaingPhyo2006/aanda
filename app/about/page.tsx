import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FFD700] to-[#FFA500] p-2">
    <div className="bg-white/80 p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto h-[90vh] scrollbar-hide">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-[#383B42] mb-6">မင်္ဂလာဦး ဆွမ်းကျွေး ဖိတ်ကြားလွှာ</h1> 

      {/* Scrollable Content */}
     {/* Groom's Content */}
      <div className="text-center space-y-4">
          <p className="text-base sm:text-md md:text-xl lg:text-xl xl:text-xl  text-gray-800 ">
          စစ်ကိုင်းတိုင်းဒေသကြီး ၊ တမူးမြို့ ၊<br /> မြို့မရပ်နေ  ဦးမောင်မြင့် + ဒေါ်စန်းရီ တို့၏ သားကြီး၊ <br/>မောင်အောင်နိုင်မျိုး + Ruth Neng Nei Lhing HK တို့၏အစ်ကို
          </p>
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800 ">
          စစ်ကိုင်းတိုင်းဒေသကြီး ၊ တမူးမြို့ ၊ မြို့မရပ်နေ
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800 ">
           ဦးမောင်မြင့် + ဒေါ်စန်းရီ တို့၏ သားကြီး၊
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800 ">
           မောင်အောင်နိုင်မျိုး + Ruth Neng Nei Lhing HK
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800 ">
           တို့၏အစ်ကို
          </p> */}
          <p className="text-2xl font-bold text-[#ff69b4]">မောင်အောင်နိုင်ဖြိုး</p>
          <p className="sm:text-lg md:text-md lg:text-md xl:text-md  text-gray-900">Software Engineer, <br/>QHRM Myanmar Co,Ltd.</p>
          <p className="text-2xl font-bold text-[#ff6347]">နှင့်</p>
     {/* Bride's Content */}
        <p className="text-base sm:text-md md:text-xl lg:text-xl xl:text-xl text-gray-800">
          မွန်ပြည်နယ် ၊ သထုံမြို့ ၊ အောက်ကျင်းရပ်နေ <br /> (ဦးဖိုးစိန်) + ဒေါ်ခင်ညိုဝင်း တို့၏ သမီးကြီး၊ <br/>မောင်ခိုင်စိုး+ မအေးအေးမွန်၊ မထက်ထက်ဖြိုး၊ မထက်ထက်မျိုး တို့၏အစ်မ
         </p>
         {/* <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-800">
          မွန်ပြည်နယ် ၊ သထုံမြို့ ၊ အောက်ကျင်းရပ်နေ
         </p>
         <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-800">
          (ဦးဖိုးစိန်) + ဒေါ်ခင်ညိုဝင်း 
         </p>
         <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-800">
          တို့၏ သမီးကြီး၊ 
         </p>
         <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-800">
          မောင်ခိုင်စိုး+ မအေးအေးမွန်၊
         </p>
         <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-800">
          မထက်ထက်ဖြိုး၊
         </p>
         <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-800">
          မထက်ထက်မျိုး
         </p>
         <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-gray-800">
          တို့၏အစ်မ
         </p> */}
          <p className="text-2xl font-bold text-[#ff69b4]">မအေးအေးစိုး</p>
          <p className="sm:text-lg md:text-md lg:text-md xl:text-md text-gray-900">B.Sc(Maths)</p>
          <p className="text-xl font-bold text-[#ff6347]">တို့၏</p>
          <p className="text-base sm:text-md md:text-xl lg:text-xl xl:text-xl  text-gray-800">မင်္ဂလာဦး ဆွမ်းကျွေး အခမ်းအနားသို့ ကြွရောက်ချီးမြှင့်ပေးပါရန် နှစ်ဖက်သော မိဘများနှင့် ကျွန်တော် ကျွန်မတို့က ခင်မင်လေးစားစွာဖြင့် ဖိတ်ကြားအပ်ပါသည်။</p>
          {/* <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800">မင်္ဂလာဦးဆွမ်းကျွေး အခမ်းအနားသို့</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800">ကြွရောက်ချီးမြှင့်ပေးပါရန် </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800">နှစ်ဖက်သော မိဘများနှင့်</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800">ကျွန်တော် ကျွန်မတို့က </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl  text-gray-800">ခင်မင်ရင်းနှီးစွာ ဖိတ်ကြားအပ်ပါသည်။</p> */}
      
      {/* Wedding Plan Details */}
      <div className='h-4'/>
        <div className="mt-1">
        <Link className="bg-[#462048] text-white py-2 px-4 rounded-md hover:bg-blue-600" href="/plan">မင်္ဂလာ အစီအစဥ်</Link>
        </div>
      <div className='h-4'/>

      </div>
    </div>
  </div>
  );
}

// bg-gradient-to-b from-[#FFD700] to-[#FFA500]
// bg-[#ECD7D0]
