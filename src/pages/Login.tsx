import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { GoogleLogin } from '@react-oauth/google';
import { useMsal } from '@azure/msal-react';
import { GOOGLE_CLIENT_ID, msalConfig } from '../config/auth';
import './Login.css';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { instance } = useMsal();

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log('Google Login Success:', credentialResponse);
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
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
                clientId={GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <Button 
                    variant="outline-danger" 
                    className="login-button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FaGoogle className="me-2" />
                    {t('login.withGoogle', 'Continue with Google')}
                  </Button>
                )}
              />
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