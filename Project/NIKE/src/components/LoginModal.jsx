import React, { useState } from "react";
import Modal from "react-modal";

const LoginModal = ({ closeModal, isLogin, setIsLogin }) => {
  const [modalHeight, setModalHeight] = useState("auto");

  const handleSignUp = () => {
    setIsLogin(false);
    setModalHeight("auto");
  };

  const handleSignIn = () => {
    setIsLogin(true);
    setModalHeight("auto");
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      style={modalStyles}
    >
      <div
        className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-80 relative backdrop-blur-md transition-all duration-500"
        style={{ height: modalHeight }}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl font-semibold"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          {isLogin ? "Sign In" : "Sign Up"}
        </h2>
        <div className="flex justify-between w-full mb-4">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            G+
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            f
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            GH
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            in
          </button>
        </div>
        <form className="w-full">
          {!isLogin && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex flex-col items-center mt-4">
          {isLogin ? (
            <>
              <a href="#" className="text-blue-500 mb-2">
                Forgot Your Password?
              </a>
              <a href="#" onClick={handleSignUp} className="text-blue-500">
                Don't have an account? Sign Up
              </a>
            </>
          ) : (
            <a href="#" onClick={handleSignIn} className="text-blue-500">
              Already have an account? Sign In
            </a>
          )}
        </div>
      </div>
    </Modal>
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
    borderRadius: "12px",
    width: "auto",
    maxWidth: "100%",
    background: "transparent",
    zIndex: 2000,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(8px)",
    zIndex: 1000,
  },
};

export default LoginModal;
