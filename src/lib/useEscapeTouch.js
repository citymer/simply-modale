import {useEffect} from 'react';

const useEscapeTouch = (key,action) => {
    useEffect(() => {
        const onKeyUp = (e) => {
          if (e.key === key) action()
        }
        window.addEventListener('keyup', onKeyUp)
        return () => window.removeEventListener('keyup', onKeyUp)
      }, [action, key])
};

export default useEscapeTouch;