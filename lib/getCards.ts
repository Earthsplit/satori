export default async function getCards(url: string) {
	const response = await fetch(`http://localhost:4000/${url}`, {
		cache: 'no-cache',
	})

	if (!response.ok) throw new Error('Failed to fetch cards')

	return response.json()
}
