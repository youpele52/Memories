import Image from 'next/image'
import NavItem from './NavItem'
import {
  FireIcon,
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  DocumentAddIcon,
  UserIcon,
  ChatAlt2Icon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import memory from '../public/images/memory.svg'
import { memo } from 'react'

function Nav() {
  const router = useRouter()
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='mb-6 cursor-pointer' onClick={() => router.push('/')}>
        <Image
          className='object-contain '
          src={memory}
          width={200 * 0.5}
          height={100 * 0.5}
        />
      </div>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <div onClick={() => router.push('/')}>
          <NavItem title='HOME' Icon={HomeIcon} />
        </div>
        {/* <NavItem title='TRENDING' Icon={FireIcon} />
        <NavItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <NavItem title='CONTACT' Icon={ChatAlt2Icon} />
        
      <NavItem title='SEARCH' Icon={SearchIcon} /> */}
        <div onClick={() => router.push('/collection')}>
          <NavItem title='COLLECTIONS' Icon={CollectionIcon} />
        </div>

        <div onClick={() => router.push('/account')}>
          <NavItem title='ACCOUNT' Icon={UserIcon} />
        </div>
      </div>
      {/* next Image does lazy image loading, it needs to be imported like normal react comp*/}
    </header>
  )
}

export default Nav
