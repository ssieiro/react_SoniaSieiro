import React from 'react';
import PropTypes from 'prop-types';
import {} from 'react-native';
import {Flatlist} from '../../atoms';
import styles from './styles';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import {SearchSource} from 'jest';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movies = getState().search.list;
    console.log(movies);
    return null;
  }
}

Movies.propTypes = {};

export default Movies;
