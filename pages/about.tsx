import { MouseEvent } from 'react';
import { Header, Button, Divider, Form, List, TextArea } from 'semantic-ui-react';

const About = () => {
  const handleClick = (e: MouseEvent) => {
    alert('보내졌는줄 알았지? 캬루 지롱~');
  };

  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="user" />
          <List.Content>Pangho297</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Incheon</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:pangho297@gmail.com">pangho297@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="https://github.com/pangho297">github.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의 사항
      </Header>
      <Divider />
      <Form>
        <Form.Field>
          <label>제목</label>
          <input />
        </Form.Field>
        <Form.Field>
          <label>내용</label>
          <TextArea />
        </Form.Field>
        <Button color="green" onClick={handleClick}>
          보내기
        </Button>
      </Form>
    </div>
  );
};

export default About;
