import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import propTypes from "prop-types";

export const SocketContext = createContext({
  socket: null,
  connectSocket: () => {},
});

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  const connectSocket = () => {
    if (socket) socket.disconnect();
    const newSocket = io("https://brandbrain.abdulridhoramadhan.my.id");
    setSocket(newSocket);
  };

  useEffect(() => {
    connectSocket();
    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, connectSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: propTypes.node,
};
