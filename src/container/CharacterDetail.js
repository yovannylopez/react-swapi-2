// Dependencies core
import React, { Component } from 'react';

// Component
import Character from '../component/Character';

// Styles
import { Container } from '../shared/styles/Grid';
import Loader from '../shared/styles/Loader';

// Helper
import { getSingleMovie } from '../shared/helpers/api';

class Movie extends Component {
    state = {
        loading: false,
        characters: [],
        director: null,
        episode: null,
        description: null,
        title: null,
    };

    toggleLoading = () => {
        this.setState({ loading: !this.state.loading });
    };

    async componentDidMount() {
        this.toggleLoading();
        const { id } = this.props.match.params;
        const data = await getSingleMovie(id);
        this.setState({
            loading: false,
            ...data,
        });
    }

    render() {
        const {
            loading,
            title,
            director,
            episode,
            characters,
            description,
        } = this.state;
        return (
            <Container>
                {loading ? (
                    <Loader />
                ) : (
                        <Character
                            title={title}
                            director={director}
                            description={description}
                            episode={episode}
                            characters={characters}
                        />
                    )}
            </Container>
        );
    }
}

export default Movie;
