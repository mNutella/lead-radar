import React, { Suspense, useEffect, useState } from 'react';

export const withSuspense = (WrappedComponent, LoaderComponent) => props => (
  <Suspense fallback={LoaderComponent}>
    <WrappedComponent {...props} />
  </Suspense>
);

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height };
};

export const useResponsive = () => {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const setSizes = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setMobile(true);
      setTablet(false);
      setDesktop(false);
    } else if (width >= 768 && width < 1024) {
      setMobile(false);
      setTablet(true);
      setDesktop(false);
    } else if (width >= 1024) {
      setMobile(false);
      setTablet(false);
      setDesktop(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSizes();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    mobile: isMobile,
    tablet: isTablet,
    desktop: isDesktop,
    setSizes,
  };
};

export const useRecaptcha = () => {
  const [verified, setVerify] = useState(false);

  const handleChange = (value) => {
    if (value) {
      setVerify(true);
    } else {
      setVerify(false);
    }
  };

  return { handleChange, isVerified: verified };
};

export const useModal = () => {
  const [show, setShow] = useState(false);

  const handleToggleModal = () => {
    setShow(!show);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return { handleToggleModal, handleCloseModal, isShow: show };
};
