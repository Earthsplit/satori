import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const id = params.id

	console.log(id)

	const result = await db.card.delete({
		where: { id },
	})

	return NextResponse.json({ result })
}

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const id = params.id

	console.log(id)

	const res = await request.json()
	const { english, japanese } = res

	console.log(english, japanese)

	const result = await db.card.update({
		where: { id },
		data: { english, japanese },
	})

	return NextResponse.json({ result })
}
