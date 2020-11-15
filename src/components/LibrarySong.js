const LibrarySong = ({
	song,
	audioRef,
	songs,
	isPlaying,
	setCurrentSong,
	setIsPlaying,
	setSongs,
}) => {
	const songSelectHandler = async () => {
		await setCurrentSong(song);
		//add ActiveSong
		const newSongs = songs.map((el) => {
			if (el.id === song.id) {
				return { ...el, active: true };
			} else {
				return {
					...el,
					active: false,
				};
			}
		});

		setSongs(newSongs);
		if (isPlaying) audioRef.current.play();
	};
	return (
		<div
			className={`library-song ${song.active ? "selected" : ""}`}
			onClick={songSelectHandler}
		>
			<img src={song.cover} alt={song.name} />
			<div className='song-description'>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
