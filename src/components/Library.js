import LibrarySong from "./LibrarySong";

const Library = ({
	songs,
	isPlaying,
	setCurrentSong,
	setIsPlaying,
	audioRef,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`library ${libraryStatus ? "active-library" : ""}`}>
			<h2>Library</h2>
			<div className='library-songs'>
				{songs.map((song) => {
					return (
						<LibrarySong
							setCurrentSong={setCurrentSong}
							song={song}
							songs={songs}
							setIsPlaying={setIsPlaying}
							key={song.id}
							audioRef={audioRef}
							setSongs={setSongs}
							isPlaying={isPlaying}
						></LibrarySong>
					);
				})}
			</div>
		</div>
	);
};

export default Library;
