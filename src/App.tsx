import Disclosure from "./components/Disclosure/Disclosure";
import Tabs from "./components/tabs/tabs";
import Modal from "./modal/modal";

function App() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
      <h1>Accessibility Playground</h1>

      <Modal />

      <hr />

      <Tabs />

      <hr />

      <Disclosure />
    </main>
  );
}

export default App;
