import { fetchRecords, getAudioDuration } from '@/utils/functions'

const Home = async () => {
	// const duration = await getAudioDuration(
	// 	'./recordings/Polyphia - Playing God (Siroo Ringtone).mp3'
	// )

	// console.log(duration)

	fetchRecords('./recordings')

	return <div>Home</div>
}
export default Home
