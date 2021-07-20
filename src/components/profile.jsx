import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useFirebaseApp } from 'reactfire';
import logo from '../images/logoEverisBlanco.png';
import LogOutBtn from './logOut';
import ResumeSkills from './resumeSkills';
import AddSkill from './addSkill';

const Profile = props => {
  const firebase = useFirebaseApp();
  const user = firebase.auth().currentUser.email

  return (
    <Container>
      <Row>
        <header>
          <div className="header">
            <img src={logo} className="logo" width="60px" rel="preload" alt="logo"/>
            <p>Bienvenid@: {user}</p>
          </div>
        </header>
      </Row>
      <Row>
        <Col>
          <div>
            <ResumeSkills />
          </div>
        </Col>
        <Col>
          <div>
            <AddSkill />
            <LogOutBtn />
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default Profile;