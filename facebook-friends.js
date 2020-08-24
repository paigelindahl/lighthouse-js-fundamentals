var facebookProfile = {
  name: 'Paige',
  friends: 1000,
  messages: ['hi how are you', 'very cool', 'lol'],
  postMessage: function (message) {
      facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
      facebookProfile.messages.splice(index,1);
  },
  addFriend: function () {
     facebookProfile.friends = facebookProfile.friends + 1; 
  },
  removeFriend: function () {
      if(facebookProfile.friends > 0) 
          facebookProfile.friends = facebookProfile.friends - 1;
          
  }
}
facebookProfile.postMessage('hello');
console.log(facebookProfile.messages);