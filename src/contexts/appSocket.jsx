import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import propTypes from "prop-types";

export const SocketContext = createContext({
  socket: null,
});

export const SocketProrvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socket = io("http://localhost:3000");
    setSocket(socket);
  }, []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProrvider.propTypes = {
  children: propTypes.node,
};
