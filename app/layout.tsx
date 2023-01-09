'use client';
import Head from "./head";
import styled from '@emotion/styled';
import { color, globalStyles } from "styles/styles";
import SideNavigation from "src/layout/SideNavigation";
import Footer from "src/layout/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <Head />
      {globalStyles}
      <Body>
        <SideNavigation />
        <ChildLayout>
          {children}
          <Footer />
        </ChildLayout>
      </Body>
    </html>
  )
}

const Body = styled.body({
  backgroundImage: 'url(/images/bg_black.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  padding: '24px 36px'
})
const ChildLayout = styled.div({
  width: '100%',
  color: color.White,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

export default RootLayout;