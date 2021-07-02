import styled, { css } from 'styled-components';

import keyframes from 'ui/keyframes';

export default {
  StyledLoader: styled.div`
        position: ${({ position }) => position || 'relative'};
        margin: ${({ margin }) => margin};
        height: ${({ height }) => height};
        ${({ zIndex }) => !!zIndex && css`
          z-index: ${zIndex};
        `}
        ${({ top }) => !!top && css`
          top ${top};
        `}
        ${({ left }) => !!left && css`
          left ${left};
        `}
        ${({ transform }) => !!transform && css`
          transform ${transform};
        `}
        width: ${({ width }) => width};
            &:before {
                content: '';
                display: ${({ inline }) => (inline ? 'none' : 'block')};
                padding-top: 100%;
            }
      
       .circular {
          animation: ${keyframes.rotate} 2s linear infinite;
          height: ${({ height }) => height};
          transform-origin: center center;
          position: ${({ inline }) => (inline ? 'relative' : 'absolute')};
          top: ${({ inline }) => (inline ? '0' : '0')}px;
          bottom: 0;
          right: ${({ inline }) => (inline ? '0' : '0')}px;
        }

        .path {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          animation: ${keyframes.dash} 1.5s ease-in-out infinite;
          animation-play-state: running !important;
          stroke-linecap: round;
          stroke: #52AE30;
        }
  `,
};
