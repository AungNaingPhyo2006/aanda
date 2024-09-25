import Link from 'next/link';

export default function Plan() {
  return (
    <div className="min-h-screen flex items-center justify-center

    bg-[#ECD7D0]
    p-4">
    <div className="bg-white/80 p-6 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto h-[90vh] scrollbar-hide">
      <h1 className="text-2xl font-bold text-center text-[#4C5933] mb-6">"မင်္ဂလာ အစီအစဥ်"</h1>
      <h1 className="text-2xl font-bold text-center text-[#383B42] mt-6">..................</h1>

      {/* Scrollable Content */}
     {/* Groom's Content */}
      <div className="text-center space-y-4 mt-6">
          <p className="text-2xl font-bold   text-gray-900">
          မင်္ဂလာ နေ့ရက်
          </p>
          <p className="text-lg font-bold text-[#462048]">၁၃၈၆ ခုနှစ်၊ တန်ဆောင်မုန်း လပြည့်ကျော်(၉)ရက်၊ ၂၄.၁၁.၂၀၂၄(တနင်္ဂနွေနေ့)။<br/></p>
          <div className='h-12'/>
          <p className="text-2xl font-bold   text-gray-900">
          မင်္ဂလာ အချိန်
          </p>
          <p className="text-lg font-bold text-[#462048]">နံနက်( ၉ ) နာရီ မှ ( ၁၁ ) နာရီ အထိ။<br/></p>
          <div className='h-12'/>
          <p className="text-2xl font-bold   text-gray-900">
          မင်္ဂလာ နေရာ
          </p>
          <p className="text-lg font-bold text-[#462048]">သထုံမြို့၊ အောက်ကျင်းရပ်၊ (ဦးဖိုးစိန်) + ဒေါ်ခင်ညိုဝင်း မိသားစုတို့၏ နေအိမ်သို့။<br/></p>
      {/* Wedding Plan Details */}
      <div className='h-4'/>
        <div className="mt-1">
        <Link className="bg-[#462048] font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600" href="/">လှိုက်လှဲစွာ ကျေးဇူးတင်ရှိပါသည်။</Link>
        </div>
      <div className='h-4'/>
      </div>
    </div>
  </div>
  );
}