import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaMicrosoft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { GoogleLogin, CredentialResponse, GoogleOAuthProvider } from '@react-oauth/google';
import { useMsal } from '@azure/msal-react';
import { GOOGLE_CLIENT_ID } from '../config/auth';
import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap 樣式

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { instance } = useMsal();

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    alert(credentialResponse.credential);
    console.log(credentialResponse.credential);
    // Here you would typically send the credential to your backend
    // and handle the authentication flow
  };

  const handleGoogleError = () => {
    console.error('Google Login Failed');
  };

  const handleMicrosoftLogin = async () => {
    try {
      const response = await instance.loginPopup({
        scopes: ['user.read']
      });
      console.log('Microsoft Login Success:', response);
      // Here you would typically handle the authentication flow
    } catch (error) {
      console.error('Microsoft Login Failed:', error);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <div className="login-box">
            <h2 className="text-center mb-4">{t('login.title', 'Login')}</h2>
            <div className="d-grid gap-3">
              <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap={true}
                  type="standard"
                  theme="outline"
                  text="continue_with"
                  shape="rectangular"
                />
              </GoogleOAuthProvider>
              <Button 
                variant="outline-primary" 
                className="login-button"
                onClick={handleMicrosoftLogin}
              >
                <FaMicrosoft className="me-2" />
                {t('login.withMicrosoft', 'Continue with Microsoft')}
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login; 