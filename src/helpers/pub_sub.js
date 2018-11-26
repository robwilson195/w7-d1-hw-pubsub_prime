
// PubSub helper file to make publishing and subscribing easier.
const PubSub = {
  publish: function(channel, payload){  // The publisher function takes a new channel name and the information which is to be transmitted.
    const event = new CustomEvent(channel, {
      detail: payload
  });                                   // A new event is created, which will occur on the channel passed, and use an object with the payload saved inside.
    document.dispatchEvent(event);      // PUBLISH. Launch the event, so that the document can listen for it.
  },
  subscribe: function(channel, callback){           // Subscribe takes the channel name to be listened for and a function to describe what should be done with the received payload.
    document.addEventListener(channel, callback);   // Adds the event listener.
  }
};
