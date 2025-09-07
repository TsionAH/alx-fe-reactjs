import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import UserContext  from './components/UserContext';
function App() {
 
  return (
    <>
     
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
     
      <UserContext.Provider value={userData}> {/* <-- Pass value here */}
      <ProfilePage />
    </UserContext.Provider>
      
      
    </>
    
  );
}

export default App
