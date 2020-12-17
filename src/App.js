import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthProvider } from './auth/Auth'
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import Login from './auth/Login';
import SignUp from './auth/Signup'
import PrivateRoute from './auth/PrivateRoute'
function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  const Home = () => {
    return (
      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </div>
    );
  }

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
