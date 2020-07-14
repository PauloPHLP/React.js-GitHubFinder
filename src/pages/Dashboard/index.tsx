import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub explorer" />
      <Title>Explore GitHub repositories</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/32931744?s=460&u=ec69aaf405f647ea3de66f3c817899cbbee1aaa5&v=4"
            alt="Paulo Lima"
          />
          <div>
            <strong>Paulo Lima Repo</strong>
            <p>Repo description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/32931744?s=460&u=ec69aaf405f647ea3de66f3c817899cbbee1aaa5&v=4"
            alt="Paulo Lima"
          />
          <div>
            <strong>Paulo Lima Repo</strong>
            <p>Repo description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/32931744?s=460&u=ec69aaf405f647ea3de66f3c817899cbbee1aaa5&v=4"
            alt="Paulo Lima"
          />
          <div>
            <strong>Paulo Lima Repo</strong>
            <p>Repo description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
