import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Sizing = ({ provider, nft, cost, setIsLoading }) => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [size, setSize] = useState('Small'); // State to store selected size

  const mintHandler = async (e) => {
    e.preventDefault();
    setIsWaiting(true);

    try {
      const signer = await provider.getSigner();
      const transaction = await nft.connect(signer).mint(1, { value: cost });
      await transaction.wait();
      // You might want to store the selected size somewhere after a successful transaction
      console.log('Selected size:', size);
    } catch {
      window.alert('User rejected or transaction reverted');
    }

    setIsLoading(true);
    setIsWaiting(false); // Reset waiting state after the process
  };

  return (
    <Form onSubmit={mintHandler} style={{ maxWidth: '450px', margin: '50px auto' }}>
      {isWaiting ? (
        <Spinner animation="border" style={{ display: 'block', margin: '0 auto' }} />
      ) : (
        <>
          <Form.Group controlId="sizeSelect">
            <Form.Label>Select Size</Form.Label>
            <Form.Control
              as="select"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Mint
            </Button>
          </Form.Group>
        </>
      )}
    </Form>
  );
};

export default Sizing;
