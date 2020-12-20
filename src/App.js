import { connect } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "./redux/Counter/counter.action";

function App({ count, incrementCount, decrementCount }) {
  return (
    <section>
      <p>Count: {count}</p>

      <button type="button" onClick={incrementCount}>
        Increment
      </button>
      <button type="button" onClick={decrementCount}>
        Decrement
      </button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(increaseCounter()),
    decrementCount: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
