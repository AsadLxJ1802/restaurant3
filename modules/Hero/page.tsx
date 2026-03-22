import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import { IconArrowRight } from '@/public/icons/page'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Hero = () => {
    const t = useTranslations("Hero")
  return (
    <section className=''>
        <div className='relative containers   p-15 hero-bg rounded-[50px] '>
          <div>
            <Image className='absolute top-30 -left-13' src={"/images/Hero-bg-img.png"} alt='hero img ' width={200} height={200}/>
          </div>
            <HeroHeader/>
            <div className='flex items-center justify-between'>
              <div className='w-100'  >
                <h1 className='text-[64px] uppercase font-extrabold mb-4.25' >{t("title")}</h1>
                <Button type='button' extraStyle='p-4 flex items-center gap-2.5 rounded-t-[13px]  text-[#ffffff] rounded-l-[13px] bg-[#000000]'  title='Посмотреть меню' icon={<IconArrowRight/>} iconPost='right'/>
              </div>
              <Image src={"/images/Hero-img.png"} className='h-150' alt='Hero img' width={800} height={800}/>
            </div>
        </div>
    </section>
  )
}

export default Hero