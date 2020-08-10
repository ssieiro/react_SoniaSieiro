import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

export const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading},
  };
  return action;
};

export const fetchMovieDetail = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const getMovieDetailRes = await api.getMovieDetail();
      const list = getMoviesRes.data.records;
      dispatch(updateList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
