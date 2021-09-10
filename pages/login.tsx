import axios from 'axios';
import { useRouter } from 'next/router';
import { Form, Button } from 'semantic-ui-react';

const Login = () => {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const res = await axios.post('/api/login');
      if (res.status === 200) {
        router.push('/admin');
      }
    } catch (error) {
      console.error;
    }
  };

  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form>
        <Form.Field inline>
          <input type="text" placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
