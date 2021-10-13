import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

const Admin = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  const checkLogin = async () => {
    try {
      const res = await axios.get('/api/isLogin');
      if (res.status === 200 && res.data.name) {
        setIsLogin(true);
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.error;
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.get('/api/logout');
      if (res.status === 200) {
        setIsLogin(false);
        router.push('/');
      }
    } catch (error) {
      console.error;
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      Admin
      {isLogin && <Button onClick={handleLogout}>Logout</Button>}
    </div>
  );
};

export default Admin;
