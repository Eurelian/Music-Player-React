import { v4 as uuidv4 } from "uuid";

const songList = () => {
	return [
		{
			name: "Snowstalgia",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg",
			artist: "invention_",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10305",
			color: ["#CCB3C9", "#DC5980"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "There and Back",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg",
			artist: "Shopan",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10311",
			color: ["#CCB3C9", " #DC5980"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "5 am",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg",
			artist: "Ruck P, Shuko",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10309",
			color: ["#CCB3C9", "#DC5980"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Going Back",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
			color: ["#CCB3C9", "#DC5980"],
			id: uuidv4(),
			active: false,
		},
	];
};

export default songList;
