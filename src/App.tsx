import RootRouter from "./RootRouter";
import ModalProvider from "./components/modal/ModalProvider";
import SessionProvider from "./components/provider/SessionProvider";

function App() {
  return (
    <SessionProvider>
      <ModalProvider>
        <RootRouter />
      </ModalProvider>
    </SessionProvider>
  );
}

export default App;
