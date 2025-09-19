import logo from './logo.svg';
import './App.css';

function App() {
  
  const test = () => {
    console.log('Application Launched.');
  }

  const userChatHistory = (tab, message, newChat = false) => {
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    console.log(chatHistory);

    const uniqNumber = Math.floor(new Date().valueOf() * Math.random());
    const timestamp = new Date().toISOString();
    const tabIndex = chatHistory.findIndex((item) => item.tab === tab);

    if (tabIndex !== -1) {
      if (selectedPrevChatId && !newChat) {
        // Continue selected previous chat session
        const chatSession = chatHistory[tabIndex].chat.find(chat => chat.id === selectedPrevChatId);
        if (chatSession) {
          chatSession.messages.push(message);
        } else {
          console.warn("Selected chat ID not found. Starting a new chat.");
          chatHistory[tabIndex].chat.unshift({ id: uniqNumber, date: timestamp, messages: [message] });
        }
      } else if (newChat || chatHistory[tabIndex].chat.length === 0) {
        // Start a new chat session while keeping old chats (limit last 10)
        chatHistory[tabIndex].chat.unshift({ id: uniqNumber, date: timestamp, messages: [message] });
      } else {
        // Ensure the latest chat session exists before pushing messages
        if (!chatHistory[tabIndex].chat[0]) {
          chatHistory[tabIndex].chat[0] = { id: uniqNumber, date: timestamp, messages: [] };
        }
        chatHistory[tabIndex].chat[0].messages.push(message);
      }
      // // **Limit each tab to last 10 chats**
      // chatHistory[tabIndex].chat = chatHistory[tabIndex].chat.slice(0, 10);
    } else {
      // Create new tab entry if it doesn't exist
      chatHistory.push({ tab, chat: [{ id: uniqNumber, date: timestamp, messages: [message] }] });
    }

    autoDeleteOldChat(chatHistory);
    console.log(chatMessages)

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
