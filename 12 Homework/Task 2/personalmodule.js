// personalmodule.js
function getGreetingMessage(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let greetingMessage = '';
  
    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingMessage = 'Good afternoon';
    } else {
      greetingMessage = 'Good evening';
    }
  
    return `${greetingMessage}, ${username}`;
  }
  
  module.exports = {
    getGreetingMessage,
  };
  