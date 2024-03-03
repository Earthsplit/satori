export default async function getCards() {
	const response = await fetch('http://localhost:4000/cards', {
		cache: 'no-cache',
	})

	if (!response.ok) throw new Error('Failed to fetch cards')

	return response.json()
}
