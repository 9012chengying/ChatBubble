import axios from "axios";

export const checkIfRoomExists = async (roomId) =>{
    const response = await axios.get(
        //if Nikolas can be handed over from here
        'https:'
    );

    return response.data.roomExists;
}