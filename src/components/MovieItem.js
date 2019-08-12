// Dependencies core
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import MovieHeader from './MovieHeader';
import MovieDescription from './MovieDescription';
import MovieLink from './MovieLink';

const MovieContent = styled.div`
	display: block;
	background-color: #232323;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	color: #fff;
	transform: perspective(1px) translateZ(0);
	transition-duration: 0.3s;
	transition-property: box-shadow;
	box-shadow: 0px 0px 10px 3px transparent, 0px 0px 10px rgba(0, 0, 0, 0);
	border-radius: 0.3rem;

	&:hover {
		box-shadow: 0px 0px 10px 3px #2098d1, 0px 0px 10px rgba(0, 0, 0, 0);
	}
`;

const MovieItem = ({ id, title, description, releaseDate }) => (
	<ColCustom>
		<MovieContent>
			<MovieHeader id={id} title={title} releaseDate={releaseDate} />
			<MovieDescription description={description} />
			<MovieLink id={id} />
		</MovieContent>
	</ColCustom>
);

MovieItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	releaseDate: PropTypes.string.isRequired
};

export default MovieItem;
