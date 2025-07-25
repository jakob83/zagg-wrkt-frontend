import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import BottomNav from './BottomNav';
import { useUser } from '../context/UserContext';
import determineColor from '../util/determineColor';
import LogoInApp from '/LogoInApp.png';

const Container = styled.div`
  min-height: 100vh;
  background-color: #121212;
  max-width: 768px;
  margin: 0 auto;
  position: relative;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
`;

const TopNav = styled.nav`
  background-color: #121212;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.h1`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`;

const ProfileButton = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  border: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const PointsDisplay = styled.div`
  background: linear-gradient(
    135deg,
    ${props => props.colors.main}15 0%,
    ${props => props.colors.secondary}15 100%
  );
  border: 1px solid ${props => props.colors.main}40;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: ${props => props.colors.main};
  font-weight: 600;
  font-size: 0.9rem;
  text-shadow: 0 0 8px ${props => props.colors.main}30;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  box-shadow:
    0 0 15px ${props => props.colors.main}20,
    inset 0 0 15px ${props => props.colors.main}05;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 4px 20px ${props => props.colors.main}30,
      inset 0 0 15px ${props => props.colors.main}10;
  }

  &::before {
    content: '🏆';
    font-size: 1rem;
    animation: sparkle 2s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 4s infinite;
  }

  @keyframes sparkle {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const PointsValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(
    45deg,
    ${props => props.colors.main},
    ${props => props.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  display: block;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BrandText = styled.span`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: 'Comic Relief', 'Montserrat', 'Poppins', Arial, sans-serif;

  @media (max-width: 350px) {
    display: none;
  }
`;

const Layout = () => {
  const { user } = useUser();
  const colors = determineColor(user);
  const points = user?.last30DaysPoints || 0;

  return (
    <Container>
      <TopNav>
        <BrandContainer>
          <LogoImg src={LogoInApp} alt="ZaggWrkt Logo" />
          <BrandText>ZaggAthletics</BrandText>
        </BrandContainer>
        <NavContent>
          <PointsDisplay colors={colors}>
            <PointsValue colors={colors}>{points.toLocaleString()}</PointsValue>
          </PointsDisplay>
          <ProfileButton to={'/settings'}>
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.name}&backgroundColor=${colors.secondary.replace(/^#/, '')}&textColor=${colors.secondary}`}
              alt="Profile"
            />
          </ProfileButton>
        </NavContent>
      </TopNav>
      <Outlet />
      <BottomNav />
    </Container>
  );
};

export default Layout;
