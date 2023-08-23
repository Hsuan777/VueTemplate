import { useCounterStore } from "./counter";


const stores = () => ({
  counter: useCounterStore(),
});
export default stores;
