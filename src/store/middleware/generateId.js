import { generate as id } from "shortid";

const generateId = (store) => (next) => (action) => {
  if (action.type && action.type.indexOf("Added") !== -1) {
    action = { ...action, payload: { ...action.payload, id: id() } };
  }
  next(action);
};

export default generateId;
