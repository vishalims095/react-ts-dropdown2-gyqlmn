import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { useEventListener, useOnClickOutside } from './Utility';

interface Props {
  click_element: (func: () => void) => void;
  children: ReactNode;
  is_right?: boolean;
  want_width?: boolean;
}

const Drop_down: FunctionComponent<Props> = ({
  click_element,
  children,
  is_right,
  want_width,
}) => {
  const [is_open, set_open] = React.useState(false);
  const ref = React.useRef(null);

  const set_close = (): void => {
    set_open(false);
      };

  const switch_open = (): void => {
    set_open(!is_open);
   };

  useOnClickOutside(ref, set_close);
  

  const key_handler = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        set_close();
      }
    },
    [set_open]
  );

  useEventListener('keydown', key_handler);

  return (
    <div ref={ref}>
      {click_element(switch_open)}
      <div>
          {is_open && ( 
            <Drop_menu
            className="open"
            is_right={is_right}
            onClick={set_close}
            want_width={want_width}
          >
            {children}
          </Drop_menu>
          )}
      </div>
    </div>
  );
};

const Overlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 0, 0, 0.5);
`;

interface Menu_props {
  is_right: boolean | undefined;
  want_width: boolean | undefined;
}

const Drop_menu = styled.div<Menu_props>`
  right: ${(props: any) => (props.is_right ? '0' : 'auto')};
  z-index: 10000;
  position: absolute;
  width: ${(props: any) => (props.want_width ? '100%' : 'auto')};
`;

export default Drop_down;
