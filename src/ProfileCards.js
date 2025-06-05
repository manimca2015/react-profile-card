import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const users = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    role: 'Frontend Developer',
    image: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    role: 'Backend Developer',
    image: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 3,
    name: 'Lorem Ipsum',
    role: 'UI/UX Designer',
    image: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
];

function ProfileCards() {
  return (
    <Container className="mt-5">
      <h2 className='text-center py-3'>Profile Cards with React and Bootstrap</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {users.map(user => (
          <Col key={user.id}>
            <Card className="h-100 text-center shadow">
              <Card.Img
                variant="top"
                src={user.image}
                style={{ height: '350px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
                <Card.Text>{user.bio}</Card.Text>
                <Button variant="primary">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProfileCards;
