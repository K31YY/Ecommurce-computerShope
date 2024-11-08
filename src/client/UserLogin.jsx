import React, { useRef , useEffect ,useState } from 'react';
import loginLogo from "../assets/login.svg";
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const UserLogin = () => {
  // set this onLogin props to catch the function in App.jsx  
  const usernameRef = useRef();
  const passwordRef = useRef();
  // for linking
  const goto = useNavigate();
  // alert notification
  const [api, contextHolder] = notification.useNotification();
  const [isLoading , setisloading] = useState(false)
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const user = [{name: username , password: password}]
    if (username === 'bbu' && password === '123') {
      const userArrayString = JSON.stringify(user);
      // Store the user array in sessionStorage
      sessionStorage.setItem("UserList", userArrayString);
      setisloading(true)
      setTimeout(() =>
    {
      setisloading(false)
      goto("/Ecommerce/Home");
    },1500)
      // const  alreadyStoreArray   = JSON.parse(sessionStorage.getItem("UserList"))
    } else {
      usernameRef.current.value = '';
      passwordRef.current.value = '';
      usernameRef.current.focus();
      api.error({
        message: "Incorrect username or password",
        showProgress: true,
        duration: 2,
        placement: 'top',
        color:"white",  
      });
    }
  };
  if(isLoading){
    return (
      <div className="h-screen flex text-2xl text-center m-0 bg-black align justify-center items-center "><LoadingOutlined  style={{ color:"white", fontSize:40 , marginRight:10}}/>
      <span  className="text-white font-Apple Color Emoji">Waiting...</span></div>
    )
  }
  const styles = {
    loginContainer: {
      width: '400px',
      margin: '0 auto',
      padding: '20px',
      // boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      color: 'white',
      fontSize: '30px',
      fontWeight: 'bold',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      color: 'white',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      boxSizing: 'border-box',
      borderRadius: 20,
      fontSize: '20px',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      marginTop: '20px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: 15,
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    }
  };

  return (
    <>
      {contextHolder}
      <div className='LoginPage' style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)', borderRadius: 20 }}>
          <div>
            <img src={loginLogo} alt="" style={{ width: 550 }} />
          </div>
          <div style={styles.loginContainer}>
            <h1 style={styles.header}>Login Information</h1>
            <form >
              <div style={styles.formGroup}>
                <label htmlFor='username' style={styles.label}>Username:</label>
                <input
                  type='text'
                  id='username'
                  ref={usernameRef}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor='password' style={styles.label}>Password:</label>
                <input
                  type='password'
                  id='password'
                  ref={passwordRef}
                  required
                  style={styles.input}
                />
              </div>
              <button
              onClick={handleSubmit}
                type='submit'
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
