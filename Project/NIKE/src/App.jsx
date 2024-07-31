import React, { useState } from "react";
import Modal from "react-modal";
import {
  Stories,
  FlexContent,
  Hero,
  Sales,
  Footer,
  Navbar,
  Cart,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";
import LoginModal from "./components/LoginModal.jsx";

Modal.setAppElement("#root");

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <Navbar openLoginModal={openModal} />
      <Cart />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        style={modalStyles}
      >
        <LoginModal
          closeModal={closeModal}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </Modal>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "0",
    width: "auto",
    maxWidth: "100%",
    background: "transparent",
    zIndex: 2000,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

export default App;
