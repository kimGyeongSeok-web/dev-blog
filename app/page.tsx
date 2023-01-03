'use client';
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { CSS_TYPE, color } from "styles/styles";

const Home = () => {

  const [onLoad, setOnLoad] = useState<boolean>(false);

  useEffect(() => {
    setOnLoad(true);
  }, [])

  return (
    <Main>
      <Slogan>
        <Top>Skils and Knowledge</Top>
        <MiddleWrap>
          <BeforeMiddle>
            <LoadingAnimate
              width={onLoad ? 0 : 'calc(100% + 24px)'}
              height={'4px'}
              top={'-0.5px'}
              backgroundColor={color.BasicBlack}
            />
          </BeforeMiddle>
          <Middle>Always Circulating.</Middle>
          <AfterMiddle >
            <LoadingAnimate
              width={onLoad ? '100%' : 0}
            />
          </AfterMiddle>
        </MiddleWrap>
        <Bottom>To anyone,</Bottom>
      </Slogan>
    </Main>
  )
}

const Main = styled.main({});
const Slogan = styled.div({
  position: 'absolute',
  width: '100%',
  top: '45%',
  left: '0',
  transform: 'translate(0, -50%)',
  wordSpacing: '2px',
  fontSize: '3.5rem',
  fontWeight: '500',
});
const Top = styled.div({
  position: 'relative',
  left: '15%'
});
const MiddleWrap = styled.div({
  position: 'relative'
})
const BeforeMiddle = styled.div<CSS_TYPE>(
  {
    width: 'calc(15% - 12px)',
    height: '2px',
    border: '0',
    outline: '0',
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: color.White,
  },
)
const Middle = styled.div({
  position: 'relative',
  width: 'calc(25% - 24px)',
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '8px 12px'
});
const AfterMiddle = styled.div(
  {
    width: 'calc(60% + 12px)',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
)
const LoadingAnimate = styled.div<CSS_TYPE>(
  {
    position: 'relative',
    transition: 'all 0.65s ease-in-out',
  },
  props => ({
    width: props.width,
    top: props.top ? props.top : '',
    height: props.height ? props.height : '2px',
    backgroundColor: props.backgroundColor ? props.backgroundColor : color.White
  })
)
const Bottom = styled.div({
  position: 'relative',
  left: '15%'
});

export default Home;