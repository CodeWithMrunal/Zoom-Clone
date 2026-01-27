import { connect } from "mongoose";
import { Server } from "socket.io"

export const connectToSocket = (server)=>{
    const io = new Server(server);
    return io;
}
