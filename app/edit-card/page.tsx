import { UpdateCard } from '@/components/UpdateCard'

export default async function Page({ _, searchParams }: any) {
	return <UpdateCard query={searchParams.id} />
}
