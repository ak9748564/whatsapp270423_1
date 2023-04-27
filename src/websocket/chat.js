export const sendToWs = (ws, data) => {
    ws.send(JSON.stringify(data));
}
