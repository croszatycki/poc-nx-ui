import styled from '@emotion/styled';

export const Container = styled.label`
  --bu-toggle-width: 34px;
  --bu-toggle-height: 14px;
  --bu-toggle-dot_size: 20px;

  --bu-toggle-dot_offset: calc(
    (var(--bu-toggle-dot_size) - var(--bu-toggle-height)) / 2
  );

  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 0;
  height: 30px;

  &.disabled {
    opacity: var(--bu-control-disable-opacity);
    cursor: default;
  }
`;

export const Bar = styled.span`
  background-color: var(--bu-interface-05);
  transition: 0.4s;
  border-radius: var(--bu-toggle-height);
  width: var(--bu-toggle-width);
  height: var(--bu-toggle-height);
  display: inline-block;
  margin: var(--bu-toggle-dot_offset);
  margin-right: calc(var(--bu-toggle-dot_offset) + 5px);
  text-align: left;

  &::before {
    content: '';
    height: var(--bu-toggle-dot_size);
    width: var(--bu-toggle-dot_size);
    background-color: var(--bu-interface-02);
    transition: 0.4s;
    border-radius: var(--bu-toggle-dot_size);
    border: 1px solid var(--bu-interface-05);
    transform: translate(
      calc(-1 * var(--bu-toggle-dot_offset)),
      calc(-1 * var(--bu-toggle-dot_offset))
    );
    display: inline-block;
  }
`;
export const Dot = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked {
    + span {
      background-color: var(--bu-primary-accent);

      &:before {
        transform: translate(
          calc(
            var(--bu-toggle-width) - var(--bu-toggle-dot_size) +
              var(--bu-toggle-dot_offset)
          ),
          calc(-1 * var(--bu-toggle-dot_offset))
        );
        background-color: var(--bu-primary);
        border-color: transparent;
      }
    }
  }
`;

Dot.defaultProps = {
  type: 'checkbox',
};
