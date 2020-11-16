import '../stylesheets/App.css';
import data from '../data/data.json';

const App = () => {
	const podium = data
		.sort(function (x, y) {
			if (x.time > y.time) {
				return 1;
			} else if (x.time < y.time) {
				return -1;
			} else {
				return 0;
			}
		})
		.splice(0, 3);

	const winners = podium.map((eachItem) => {
		// mirar porqué nos imprime en <UL> los valores contrarios a los que contiene PODIUM
		return (
			<li key={eachItem.time}>
				<h2>{eachItem.name}</h2>
				<p>{eachItem.time}</p>
			</li>
		);
	});

	return <ul>{winners}</ul>;
};

export default App;
