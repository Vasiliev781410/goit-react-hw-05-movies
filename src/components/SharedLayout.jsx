import { Header } from "./Header/Header.jsx";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink  to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet /> 
      </Suspense> 
    </>
  );
};