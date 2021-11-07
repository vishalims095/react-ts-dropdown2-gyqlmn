import React from 'react';
import styled from 'styled-components';

const DesignButton = styled.button`
  background-color: blue;
  color: #fff;
`;

interface Props {
  click: () => {};
}

export default class Button extends React.Component<Props> {
  render() {
    const { click } = this.props;
    return <DesignButton onClick={click}>Button</DesignButton>;
  }
}