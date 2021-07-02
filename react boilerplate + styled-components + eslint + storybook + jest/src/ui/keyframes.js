import { keyframes } from 'styled-components';

export default {
  dash: keyframes`
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
    `,
  rotate: keyframes`
        100% {
            transform: rotate(360deg);
         }
    `,
  fadeSlideUp: keyframes`
          from {
            opacity: 0.01;
            transform: translateY(80px);
          }
        
          to {
            opacity: 1;
            transform: translateY(0px);
          }
    `,
  fadeSlideDown: keyframes`
          from {
            opacity: 0.01;
            transform: translateY(-80px);
          }
        
          to {
            opacity: 1;
            transform: translateY(0px);
          }
    `,
  slide: keyframes`
          0% {
            opacity: 0.01;
            transform: translateY(50px);
          }
        
          50%{
            opacity: 1;
          }
        
          100% {
            transform: translateY(0px);
          }
    `,
  fade: keyframes`
          from {
            opacity: 0.01;
          }
        
          to {
            opacity: 1;
          }
    `,
};
