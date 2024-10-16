import iconAdd from '@/assets/icons/add.svg'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import Image from 'next/image'

const Section6 = () => {
  return (
    <div className='w-[1440px] h-[948px] px-20 py-[164px] bg-white flex-col justify-start items-center gap-[60px] inline-flex'>
      <div className='justify-start items-center gap-[15px] inline-flex'>
        <div className='text-black text-5xl font-bold leading-[57.60px]'>
          Benefit
        </div>
        <div className='w-9 h-9 justify-center items-center flex'>
          <div className='w-9 h-9 relative'></div>
        </div>
      </div>
      <div className='self-stretch justify-between items-start inline-flex flex-wrap gap-[50px]'>
        <div className='h-[134px] justify-start items-center gap-6 flex min-w-[559px]'>
          <div className='p-[8.72px] bg-white/50 rounded-[544.72px] justify-start items-center gap-[5.45px] flex'>
            <div className='bg-neutral-100 rounded-[544.72px] border border-white justify-start items-center gap-[5.45px] flex'>
              <Image src={image1} alt='image1' width={116} height={116} />
            </div>
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex'>
            <div className='self-stretch h-[90px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch text-black text-[32px] font-medium leading-[38.40px]'>
                Skin Health
              </div>
              <div className='self-stretch text-[#616161] text-lg font-medium leading-snug tracking-tight'>
                Anti-aging, collagen production and reduces acne
              </div>
            </div>
            <div className='justify-center items-center gap-2.5 inline-flex'>
              <div className='text-black text-lg font-medium leading-snug tracking-tight'>
                Read more
              </div>
              <div className='w-6 h-6 justify-center items-center flex'>
                <div className='w-6 h-6 relative'>
                  <Image src={iconAdd} alt='iconAdd' width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[134px] justify-start items-center gap-6 flex  min-w-[559px]'>
          <div className='p-[8.72px] bg-white/50 rounded-[544.72px] justify-start items-center gap-[5.45px] flex'>
            <div className='bg-neutral-100 rounded-[544.72px] border border-white justify-start items-center gap-[5.45px] flex'>
              <Image src={image2} alt='image2' width={116} height={116} />
            </div>
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex'>
            <div className='self-stretch h-[68px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch text-black text-[32px] font-medium leading-[38.40px]'>
                Heart Health
              </div>
              <div className='self-stretch text-[#616161] text-lg font-medium leading-snug tracking-tight'>
                Increases libido, high in Zinc
              </div>
            </div>
            <div className='justify-center items-center gap-2.5 inline-flex'>
              <div className='text-black text-lg font-medium leading-snug tracking-tight'>
                Read more
              </div>
              <div className='w-6 h-6 justify-center items-center flex'>
                <div className='w-6 h-6 relative'>
                  <Image src={iconAdd} alt='iconAdd' width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[134px] justify-start items-center gap-6 flex  min-w-[559px]'>
          <div className='p-[8.72px] bg-white/50 rounded-[544.72px] justify-start items-center gap-[5.45px] flex'>
            <div className='bg-neutral-100 rounded-[544.72px] border border-white justify-start items-center gap-[5.45px] flex'>
              <Image src={image1} alt='' width={116} height={116} />
            </div>
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex'>
            <div className='self-stretch h-[90px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch text-black text-[32px] font-medium leading-[38.40px]'>
                Skin Health
              </div>
              <div className='self-stretch text-[#616161] text-lg font-medium leading-snug tracking-tight'>
                Anti-aging, collagen production and reduces acne
              </div>
            </div>
            <div className='justify-center items-center gap-2.5 inline-flex'>
              <div className='text-black text-lg font-medium leading-snug tracking-tight'>
                Read more
              </div>
              <div className='w-6 h-6 justify-center items-center flex'>
                <div className='w-6 h-6 relative'>
                  <Image src={iconAdd} alt='iconAdd' width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[134px] justify-start items-center gap-6 flex  min-w-[559px]'>
          <div className='p-[8.72px] bg-white/50 rounded-[544.72px] justify-start items-center gap-[5.45px] flex'>
            <div className='bg-neutral-100 rounded-[544.72px] border border-white justify-start items-center gap-[5.45px] flex'>
              <Image src={image1} alt='' width={116} height={116} />
            </div>
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex'>
            <div className='self-stretch h-[90px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch text-black text-[32px] font-medium leading-[38.40px]'>
                Sexual Health
              </div>
              <div className='self-stretch text-[#616161] text-lg font-medium leading-snug tracking-tight'>
                Anti-aging, collagen production and reduces acne
              </div>
            </div>
            <div className='justify-center items-center gap-2.5 inline-flex'>
              <div className='text-black text-lg font-medium leading-snug tracking-tight'>
                Read more
              </div>
              <div className='w-6 h-6 justify-center items-center flex'>
                <div className='w-6 h-6 relative'>
                  <Image src={iconAdd} alt='iconAdd' width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[134px] justify-start items-center gap-6 flex  min-w-[559px]'>
          <div className='p-[8.72px] bg-white/50 rounded-[544.72px] justify-start items-center gap-[5.45px] flex'>
            <div className='bg-neutral-100 rounded-[544.72px] border border-white justify-start items-center gap-[5.45px] flex'>
              <Image src={image1} alt='' width={116} height={116} />
            </div>
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex'>
            <div className='self-stretch h-[90px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch text-black text-[32px] font-medium leading-[38.40px]'>
                Immune & Energy Support
              </div>
              <div className='self-stretch text-[#616161] text-lg font-medium leading-snug tracking-tight'>
                Anti-aging, collagen production and reduces acne
              </div>
            </div>
            <div className='justify-center items-center gap-2.5 inline-flex'>
              <div className='text-black text-lg font-medium leading-snug tracking-tight'>
                Read more
              </div>
              <div className='w-6 h-6 justify-center items-center flex'>
                <div className='w-6 h-6 relative'>
                  <Image src={iconAdd} alt='iconAdd' width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[134px] justify-start items-center gap-6 flex  min-w-[559px]'>
          <div className='p-[8.72px] bg-white/50 rounded-[544.72px] justify-start items-center gap-[5.45px] flex'>
            <div className='bg-neutral-100 rounded-[544.72px] border border-white justify-start items-center gap-[5.45px] flex'>
              <Image src={image1} alt='' width={116} height={116} />
            </div>
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex'>
            <div className='self-stretch h-[68px] flex-col justify-start items-start gap-2 flex'>
              <div className='self-stretch text-black text-[32px] font-medium leading-[38.40px]'>
                Respiratory Health
              </div>
              <div className='self-stretch text-[#616161] text-lg font-medium leading-snug tracking-tight'>
                Dissolves mucus, clears out lungs
              </div>
            </div>
            <div className='justify-center items-center gap-2.5 inline-flex'>
              <div className='text-black text-lg font-medium leading-snug tracking-tight'>
                Read more
              </div>
              <div className='w-6 h-6 justify-center items-center flex'>
                <div className='w-6 h-6 relative'>
                  <Image src={iconAdd} alt='iconAdd' width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
