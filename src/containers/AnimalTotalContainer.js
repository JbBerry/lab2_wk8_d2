import { connect } from 'react-redux';
import AnimalTotal from '../components/AnimalTotal';

const mapStateToProps = (state) => {
  return {
    animalTotal: state.length
  };
};


export default connect(mapStateToProps)(AnimalTotal);
