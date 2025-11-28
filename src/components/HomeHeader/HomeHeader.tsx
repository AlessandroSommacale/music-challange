import { Header, HeaderContent, Title, Subtitle } from './HomeHeader.styles';
import dynamic from 'next/dynamic';

const LoginContainer = dynamic(() => import('../LoginContainer/LoginContainer'), { ssr: false });

const HomeHeader = () => {
  return (
    <Header>
      <HeaderContent>
        <div>
          <Title>Top 100 Albums</Title>
          <Subtitle>Discover the most popular albums on iTunes</Subtitle>
        </div>
        <LoginContainer />
      </HeaderContent>
    </Header>
  );
};

export default HomeHeader;
