import { GlobalProvider } from "./GlobalState/GlobalState.jsx";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <div>
      <GlobalProvider>
        <HomePage />
      </GlobalProvider>
    </div>
  );
}
