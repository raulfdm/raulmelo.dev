import React, { useState } from 'react';
import styled from 'styled-components';
import { Search as SearchIcon } from 'styled-icons/evil/Search';

import { MenuButton } from '../MenuBar';
import { ClickOutside } from '../ClickOutside';

const InputWrapper = styled.div`
  outline: ${({ theme }) => theme.color.background};
  display: flex;
`;

interface InputProps {
  readonly showInput: boolean;
}

const Input = styled.input<InputProps>`
  width: ${({ showInput }) => {
    return showInput ? '18rem' : '0';
  }};
  background-color: transparent;
  transition: width 140ms ease-in;
  border: none;
  font-size: 1.6rem;
  outline: inherit;
  opacity: 100;
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.contentSans};
`;

type Props = {
  className?: string;
  onChange?: (element: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputSearch: React.FC<Props> = ({ className, onChange, placeholder }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <ClickOutside handleClickOutside={() => setShowInput(false)}>
      <InputWrapper className={className}>
        <MenuButton onClick={() => setShowInput(!showInput)}>
          {/* 
              // @ts-ignore */}
          <SearchIcon size={24} />
        </MenuButton>

        <Input
          placeholder={placeholder}
          showInput={showInput}
          onChange={onChange}
          /* TODO: implement on "ENTER" and mobile action */
        />
      </InputWrapper>
    </ClickOutside>
  );
};

InputSearch.defaultProps = {
  placeholder: 'Search for something',
};

export default InputSearch;
