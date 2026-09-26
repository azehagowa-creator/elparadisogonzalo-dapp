import { eventHandler } from "vinxi/http";

export default eventHandler({
  handler() {
    // Optional HTTP fallback (not used for websocket flow)
  },

  websocket: {
    async open(peer) {
      console.log("open", peer.id, peer.url);
    },

    async message(peer, msg) {
      const message = msg.text();

      console.log("msg", peer.id, peer.url, message);

      // Example: echo back
      await peer.send(`echo: ${message}`);
    },

    async close(peer, details) {
      console.log("close", peer.id, peer.url, details);
    },

    async error(peer, error) {
      console.log("error", peer.id, peer.url, error);
    },
  },
});
