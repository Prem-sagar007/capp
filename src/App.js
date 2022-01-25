import { ChatEngine } from 'react-chat-engine';

import ChatFeed  from './components/ChatFeed';

import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

   return(
       <ChatEngine
        height ="100vh"
        projectID="4b196163-24c7-47fb-b29b-5c120b23d4b8"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(ChatAppProps )  => <ChatFeed  {...ChatAppProps }  /> }
       />
   );

}

export default App;