'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import {
	DotsHorizontalIcon,
	TrashIcon,
	Pencil2Icon,
} from '@radix-ui/react-icons'
import useModifyCards from '@/hooks/useModifyCards'

interface CardProps {
	card?: {
		id: number
		content: {
			japanese: string
			english: string
		}
	}
	showDeleteButton: boolean
}

export function CardActions({ card, showDeleteButton }: CardProps) {
	const { deleteCard } = useModifyCards()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='flex h-8 w-8 p-0'
				>
					<DotsHorizontalIcon className='h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-[160px]'
			>
				<DropdownMenuItem>
					<Pencil2Icon className='mr-2 h-4 w-4' />
					<span>Edit</span>
				</DropdownMenuItem>
				{card && showDeleteButton && (
					<>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={() => deleteCard(card)}>
							<TrashIcon className='mr-2 h-4 w-4' />
							<span>Delete</span>
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
