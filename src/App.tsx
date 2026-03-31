import ModalProvider from "./components/modal/ModalProvider";
import RootRouter from "./RootRouter";

function App() {
  return (
    <ModalProvider>
      <RootRouter />
    </ModalProvider>
  );
}

export default App;
