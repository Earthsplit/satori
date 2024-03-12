import * as React from 'react'
import { Minus, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Nav from '../Nav'

export function NavDrawer() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline'>
					<HamburgerMenuIcon />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Move Goal</DrawerTitle>
						<DrawerClose asChild>
							<Button variant='outline'>
								<Cross2Icon />
							</Button>
						</DrawerClose>
					</DrawerHeader>
					<div className='p-4 pb-0'>
						<Nav className='flex flex-col ' />
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
