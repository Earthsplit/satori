'use client'

import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function Header() {
	const [isClicked, setIsClicked] = useState<boolean>()

	return (
		<header
			className={`${
				isClicked
					? 'flex flex-col justify-between'
					: 'flex items-center justify-between'
			} mb-8`}
		>
			<div className='flex flex-1 justify-between'>
				<Link
					href='/'
					className='font-bold tracking-tight text-3xl md:text-4xl'
				>
					Satori 🇯🇵
				</Link>
				<div className='md:hidden flex'>
					{/* <NavDrawer /> */}
					<Button
						variant='outline'
						onClick={() => setIsClicked(!isClicked)}
					>
						{isClicked ? <Cross2Icon /> : <HamburgerMenuIcon />}
					</Button>
				</div>
			</div>
			<div className='md:flex items-center hidden gap-4'>
				<Nav />
			</div>
			{isClicked && <Nav className='flex flex-col gap-2' />}
		</header>
	)
}
