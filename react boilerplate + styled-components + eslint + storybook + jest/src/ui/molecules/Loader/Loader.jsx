import React from 'react';

import {
  Box,
} from 'ui/atoms';

import styles from './styles';

const { StyledLoader } = styles;

export const Loader = ({
  isVisible = false,
  margin,
  width,
  height,
  shade,
  inline,
  weight,
  className,
  overlayProps,
  ...props
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {overlayProps && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          top={0}
          left={0}
          zIndex={9998}
          bg="rgb(153 153 153 / 60%)"
          {...overlayProps || {}}
        />
      )}
      <StyledLoader
        margin={margin}
        width={width}
        height={height}
        shade={shade}
        inline={inline}
        className={className}
        data-name="loader"
        {...overlayProps
          ? {
            zIndex: 9999,
          }
          : {}}
        {...props || {}}
      >
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth={weight}
            strokeMiterlimit="10"
          />
        </svg>
      </StyledLoader>
    </>
  );
};

Loader.styledComponent = StyledLoader;
