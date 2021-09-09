import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { Menu, MenuItemProps } from 'semantic-ui-react';

const Gnb = () => {
  const router = useRouter();
  console.log(router);
  let activeItem;

  if (router.pathname === '/') {
    activeItem = 'home';
  } else if (router.pathname === '/about') {
    activeItem = 'about';
  }

  const goLink = (e: MouseEvent, data: MenuItemProps) => {
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
      <Menu.Item name="about" active={activeItem === 'about'} onClick={goLink} />
    </Menu>
  );
};

export default Gnb;
