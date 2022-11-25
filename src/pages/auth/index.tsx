import { lazy, Suspense } from "react";
import Loader from "components/reusable/loader";

const Body = lazy(() => import("components/auth/body"));

function Auth() {
	const MainComponent = () => (
		<Suspense fallback={<Loader />}>
			<Body />
		</Suspense>
	);

	return MainComponent();
}

export default Auth;
