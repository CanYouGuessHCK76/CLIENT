import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import propTypes from "prop-types";

export const SocketContext = createContext({
  socket: null,
});

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socket = io("http://brandbrain.abdulridhoramadhan.my.id");
    setSocket(socket);
  }, []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: propTypes.node,
};
