import React, { useState } from 'react';
import styled from 'styled-components';

import SearchIcon from '../SearchIcon';

const InputWrapper = styled.div`
  outline: #fff;
  display: flex;
`;

const Input = styled.input`
  width: ${({ showInput }) => (showInput ? '18rem' : '0')};

  transition: width 140ms ease-in;
  border: none;
  font-size: 1.6rem;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  opacity: 100;
  font-family: ${({ theme }) => theme.font.contentSans};

  /* border: 1px dashed tomato; */
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  outline: inherit;
  /* border: 1px dashed blue; */
  cursor: pointer;
  font-size: 1rem;
`;

const Icon = styled(SearchIcon)`
  margin: 0 1.6rem;
`;

const InputSearch = ({ className, onChange, placeholder }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <InputWrapper className={className}>
      <SearchButton onClick={() => setShowInput(!showInput)}>
        <Icon />
      </SearchButton>
      <Input
        placeholder={placeholder}
        showInput={showInput}
        onChange={onChange}
        /* TODO: implement on "ENTER" and mobile action */
      />
    </InputWrapper>
  );
};

InputSearch.defaultProps = {
  placeholder: 'Search for something',
};

export default InputSearch;
