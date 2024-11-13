import Link from 'next/link';

export default function Plan() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFEFE] p-2">
    <div className="bg-[#F3F3FB] p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto h-[90vh] scrollbar-hide">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center  text-[#5D5DE2] mb-6">မင်္ဂလာ အစီအစဥ်</h1>
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-[#383B42] mt-2">..................</h1>

      {/* Scrollable Content */}
      {/* Wedding Plan Details */}
      <div className="text-center space-y-4 mt-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold   text-[#5D5DE2]">
          မင်္ဂလာ နေ့ရက်
          </p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#462048]">၁၃၈၆ ခုနှစ်၊ တန်ဆောင်မုန်း လပြည့်ကျော်(၉)ရက်၊ ၂၄.၁၁.၂၀၂၄(တနင်္ဂနွေနေ့)။<br/></p>
          <div className='h-12'/>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold    text-[#5D5DE2]">
          မင်္ဂလာ အချိန်
          </p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#462048]">နံနက်( ၈ ) နာရီ မှ ( ၁၀ ) နာရီ အထိ။<br/></p>
          <div className='h-12'/>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold   text-[#5D5DE2]">
          မင်္ဂလာ နေရာ
          </p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#462048]">အမှတ်(၄၂၆)၊ အုတ်ဖိုတန်းလမ်း၊ အောက်ကျင်းရပ်၊</p>
          <p className="sm:text-lg md:text-xl lg:text-xl xl:text-xl text-[#462048]">(ဦးဖိုးစိန်) + ဒေါ်ခင်ညိုဝင်း မိသားစုတို့၏ နေအိမ်သို့။<br/></p>
   
      <div className='h-4'/>
        <div className="mt-1">
        <Link className="bg-[#462048] font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600" href="/love">Please Save The Date!</Link>
        </div>
      <div className='h-4'/>
      </div>
    </div>
  </div>
  );
}