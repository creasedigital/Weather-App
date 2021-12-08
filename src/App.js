import Weather from './components/Weather';

function App() {
	const weatherStyles = {
		backgroundImage: 'url',
		height: '80vh',
	};

	return <Weather className='weather' style={weatherStyles} />;
}

export default App;
