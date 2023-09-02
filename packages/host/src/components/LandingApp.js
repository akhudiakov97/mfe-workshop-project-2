import { mount } from "landing/LandingApp";
import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const LandingApp = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const onParentNavigateRef = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname }) => {
        if(pathname !== location.pathname){
          navigate(pathname);
        }
      },
    });
    onParentNavigateRef.current = onParentNavigate;
  }, []);

  useEffect(()=>{
    const onParentNavigate = onParentNavigateRef.current;
    if(onParentNavigate){
      onParentNavigate({pathname: location.pathname});
    }
  },[location.pathname])

  return <div ref={ref} />;
};

export default LandingApp;
