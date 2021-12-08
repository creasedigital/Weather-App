import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const Weather = () => {
	const apiKey = '82da8c1d1133477183ce1f30e95d6142';
	const baseUrl = 'http://api.weatherstack.com';
	const [searchQuery, setSearchQuery] = `atlanta`;
	const [result, setResult] = [];

	useEffect(() => {
		// async function getUser() {
		// 	try {
		// 		const response = await axios.get('/user?ID=12345');
		// 		console.log(response);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// }
		// async function getUser() {
		// 	try {
		// 		const data = await axios.get(
		// 			`${baseUrl}/current?access_key=${apiKey}&query=${userQuery}`,
		// 		);
		// 		console.log(data);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// }

		// fetch(baseUrl + '/current?access_key=' + apiKey + '&query=' + searchQuery)
		{
			fetch(`${baseUrl}/current?access_key=${apiKey}&query=${searchQuery}`)
				.then((result) => {
					console.log(result);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	});
	return (
		<Container>
			<Row className='bg-light border'>
				<Col md='6'>{result}</Col>
				<Col md='6'>A column here</Col>
			</Row>
		</Container>
	);
};

export default Weather;
