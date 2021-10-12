import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <div className="login">
      <Container>
        <div className="right">
          <div className="right_content">
           <img src="img/ShootingStarLogo.png" alt="No" />
            <form action="">
              <div className="signIn_form">
                <div className="email">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="password">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <div className="sign_In_button">
                  <button>Sign In</button>
                </div>
              </div>
            </form>
            <a className="forgot_password">Forgot Password?</a>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f0f0f0;
  }

  .right_content {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;

    img{
        height : 70px;
        object-fit: contain;
        margin-bottom: 30px;
    }

    
    a{
        font-size: 14px;
        text-decoration : none;
        margin-top : 10px;
        text-align : center;
        &:hover{
            cursor : pointer;
        }
    }
  }

  .signIn_form {
    border: 1px solid lightgray;
    padding: 10px;
    padding-left: 20px;
    border-radius: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
     box-shadow: 0 0 15px -2px lightgray;
  }

  .heading {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
  }

  .email {
    p {
      margin-bottom: 10px;
      font-size: 15px;
    }
    input {
      margin-bottom: 10px;
      border-radius: 5px;
      width: 80%;
      height: 40px;
      padding: 10px;
    }
  }

  .password {
    p {
      margin-bottom: 10px;
      font-size: 15px;
    }
    input {
      margin-bottom: 10px;
      border-radius: 5px;
      width: 80%;
      height: 40px;
      padding: 10px;
    }
  }

  .sign_In_button {
    display: flex;
    justify-content: flex-end;
    button {
      background-color: #1877f2;
      border-radius: 20px;
      width: 80px;
      height: 35px;
      color: white;

      &:hover {
        background-color: #3f8ef7;
      }
    }
  }

  @media(max-width:500px){
     .signIn_form{
         width : 80vw;
         input{
             width : 90%;
         }
     }

  }


  
`;

export default Login;