import { useEffect, useRef, cloneElement } from 'react';

type ClickOutsideProps = {
  handleClickOutside?: (event: Event) => void;
  children: React.ReactHTMLElement<HTMLElement>;
};

export const ClickOutside: React.FC<ClickOutsideProps> = ({
  handleClickOutside,
  children,
}) => {
  const childRef = useRef(null);

  const onClickOutside = (event: Event): void => {
    if (childRef.current && !childRef.current.contains(event.target)) {
      handleClickOutside(event);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside);

    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  return cloneElement(children, { ref: childRef });
};
