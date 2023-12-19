import Image from 'next/image'
import Deck from '@/components/Deck'
import CreateDeckCard from '@/components/CreateDeckCard'
import Main from '@/components/structure/Main'
import SignInBtn from '@/components/SignInBtn'

export default function Home() {
  return (
    <main className='fixed left-0 top-0 bg-[var(--purple)] min-w-full min-h-full'>
      <div className='flex flex-col gap-12 min-w-full min-h-screen items-center justify-center'>
        <Image src={'/logo.png'} width={400} height={400}></Image>
        
        <SignInBtn></SignInBtn>
      </div>
      
    </main>
  )
}
