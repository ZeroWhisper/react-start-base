import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

console.log(process.env.NODE_ENV === "development");

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;
  console.log(console);
} else {
  if (!console.tron) console.tron = console;
}
