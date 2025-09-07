import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./UserProfile";  // ✅ import UserProfile
import Counter  from "./components/Counter";
import UserContext  from "./UserContext";
import ProfilePage from "./ProfilePage";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com"};
  return (
    <>

    <Counter />
      <Header />
      <MainContent />
      <Footer />
      
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
          <ProfilePage userData={userData} />
      <UserContext.Provider userData={userData}/>
    </>
  );
}

export default App;
