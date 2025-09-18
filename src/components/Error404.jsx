import React from 'react';
import { Alert } from 'react-bootstrap';

const Error404 = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Alert variant="danger" className="w-50 text-center">
        <Alert.Heading>¡Ups! Hubo un error.</Alert.Heading>
        <p className="mb-0"> ERROR</p>
      </Alert>
    </div>
  );
};

export default Error404;