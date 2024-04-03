import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const res = await request.json()
	const { english, japanese } = res

	const result = await db.card.create({
		data: {
			japanese: japanese,
			english: english,
		},
	})

	return NextResponse.json({ result })
}
