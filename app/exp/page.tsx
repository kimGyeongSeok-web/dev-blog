'use client';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { color, CSS_TYPE } from 'styles/styles';

const Experience = () => {

  // Hooks
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(true);
  }, [])

  return (
    <Main>
      <PageOnLoad>
        <LoadOnLeft width={onLoad ? '0' : '50%'}>
        </LoadOnLeft>
        <LoadOnRight width={onLoad ? '0' : '50%'}>
        </LoadOnRight>
      </PageOnLoad>
      Exp, Storage.
    </Main>
  )
}

const Main = styled.main({
  position: 'relative',
  backgroundColor: color.ComponentBackGroundColor,
  height: '100%',
  margin: '0 0 12px 0',
  padding: '24px 28px',
  borderRadius: '25px'
})
const PageOnLoad = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
})
const LoadOnLeft = styled.div<CSS_TYPE>(
  {
    position: 'absolute',
    top: 0,
    height: '100%',
    backgroundColor: color.PageOnLoadDoorColor,
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    transition: 'all 0.65s ease-in-out',
  },
  props => ({
    width: props.width,
  })
)
const LoadOnRight = styled.div<CSS_TYPE>(
  {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: color.PageOnLoadDoorColor,
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    transition: 'all 0.65s ease-in-out',
  },
  props => ({
    width: props.width,
  })
)

export default Experience;