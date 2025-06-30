const fs = require('fs')
const mm = require('music-metadata')

export const fetchRecords = async directory => {
	const files = fs.readdirSync(directory)
	const records = []

	for (const file of files) {
		const attributes = file.split('_')
		let record = {
			date: attributes[1],
			time: attributes[2],
			caller_number: attributes[3],
			called_number: attributes[4],
			filePath: `${directory}/${file}`,
		}
		try {
			const metadata = await mm.parseFile(record.filePath)
			record = {
				...record,
				duration: metadata.format.duration,
			}
			records.push(record)
		} catch (error) {
			console.log(error)
		}
	}
	console.log(records)
}
