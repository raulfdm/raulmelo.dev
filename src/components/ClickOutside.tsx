import { useEffect, useRef, cloneElement } from 'react';

export const ClickOutside = ({
  handleClickOutside,
  children,
}: {
  handleClickOutside?: (event: Event) => void;
  children: any;
}) => {
  const childRef = useRef(null);

  const onClickOutside = (event: Event) => {
    if (childRef.current && !childRef.current.contains(event.target)) {
      return handleClickOutside(event);
    }
    return null;
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside);

    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return cloneElement(children, { ref: childRef });
};
