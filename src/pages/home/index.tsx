import { lazy, Suspense } from "react";
import Loader from "components/reusable/loader";

const Header = lazy(() => import("components/header"));
const Hero = lazy(() => import("components/home/hero"));
const Body = lazy(() => import("components/home/body"));

function Home() {
	const MainComponent = () => (
		<Suspense fallback={<Loader />}>
			<Header />
			<Hero />
			<Body />
		</Suspense>
	);

	return MainComponent();
}

export default Home;
