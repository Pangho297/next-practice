import { Menu } from "semantic-ui-react";

const Gnb = () => {
  return (
    <Menu inverted>
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
    </Menu>
  );
};

export default Gnb;
