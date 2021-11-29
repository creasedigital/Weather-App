import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
const Weather = () => {
	const apiKey = '73d4b04e88b35c905f3812f0f4579cba';

	return (
		<Container>
			<Row className='bg-light border'>
				<Col md='6'>A column here</Col>
				<Col md='6'>A column here</Col>
			</Row>
		</Container>
	);
};

export default Weather;
