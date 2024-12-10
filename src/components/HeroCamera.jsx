import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import PropTypes from 'prop-types';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

HeroCamera.propTypes = {
    isMobile: PropTypes.bool.isRequired, // Ensure isMobile is a boolean and required
    children: PropTypes.node, // Ensure children can be any valid React node
  };
  
  HeroCamera.defaultProps = {
    isMobile: false, // Provide a default value for isMobile if not passed
  };
export default HeroCamera;