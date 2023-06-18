import { connect } from 'react-redux';

const MyComponent = ({ myValue }) => (
  <div>{myValue}</div>
);

const mapStateToProps = (state) => ({
  myValue: state.myValue,
});

export default connect(mapStateToProps)(MyComponent);