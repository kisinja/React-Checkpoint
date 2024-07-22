
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = "Elvis";

function App() {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
          <Image />
        </Card.Body>
      </Card>
      <div className="mt-4 text-center">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="your_image_url" alt="Your Image" style={{ width: '100px' }} />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
}

export default App;
