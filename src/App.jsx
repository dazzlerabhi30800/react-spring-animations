import "./App.scss";
import { useSpring, animated } from "@react-spring/web";
import Trails from "./components/Trail";
import Colorbox from "./components/Colorbox";

function App() {
  const spring = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
  });
  return (
    <>
      <main>
        <Trails />
        <Colorbox />
      </main>
    </>
  );
}

export default App;
