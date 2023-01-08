import React, { useState } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function RegisterScreen() {
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = () => {};
  return (
    <Container className="small-container">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1 className="my-3">Student Registration</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3" controlId="studentname">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(e) => setStudentName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="father_name">
          <Form.Label>Father Name</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(e) => setFatherName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="age">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </FormGroup>
        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>
        <FormGroup className="mb-3" controlId="class">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(e) => setStudentClass(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <div className="mb-3">
          <Button type="submit">Register</Button>
        </div>
        <div className="mb-3">
          Already have an account? <Link to={`/login`}>Login</Link>
        </div>
      </Form>
    </Container>
  );
}
