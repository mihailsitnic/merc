import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "redux/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import initI18n from "translations/i18n";
import ReactDOM from "react-dom/client";
import "./index.css";
import "webp-in-css/polyfill";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Provider store={store}>
		<PersistGate
			loading={null}
			persistor={persistor}
			onBeforeLift={() => initI18n((store as any).getState().lang)}
		>
			<App />
		</PersistGate>
		<ToastContainer />
	</Provider>
);


reportWebVitals();
