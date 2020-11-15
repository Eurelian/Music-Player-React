import { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

//data
import data from "./components/data";

function App() {
	//Ref
	const audioRef = useRef(null);
	//state
	const [songs, setSongs] = useState(data);
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);

	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animationPercentage = Math.round(
			(roundedCurrent / roundedDuration) * 100
		);

		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
			animationPercentage,
		});
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		if (isPlaying) audioRef.current.play();
	};
	return (
		<div className={`App ${libraryStatus ? "library-active" : ""}`}>
			<Nav
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
			></Nav>
			<Song currentSong={currentSong}></Song>
			<Player
				setSongs={setSongs}
				songs={songs}
				setCurrentSong={setCurrentSong}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
			></Player>
			<Library
				libraryStatus={libraryStatus}
				setCurrentSong={setCurrentSong}
				setIsPlaying={setIsPlaying}
				isPlaying={isPlaying}
				setSongs={setSongs}
				songs={songs}
				audioRef={audioRef}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={songEndHandler}
			/>
		</div>
	);
}

export default App;
