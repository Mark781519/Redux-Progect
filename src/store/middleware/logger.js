const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("PrevState: ", store.getState());
  console.log("Dispatch: ", action.type);

  let result = next(action);
  console.log("Next state: ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
