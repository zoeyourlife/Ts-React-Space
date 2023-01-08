import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: // PropsWithChildren 타입 사용, 반복적으로 Children 타입 설정해주지 않아도 됨
// 1. PropsWithChildren을 사용해야하는 경우, children을 옵셔널로 사용할 경우에만,
// 2. 항상 Children을 넘겨줘야 하는 경우에는 사용하지 않는게 좋을지도?
//* children의 타입을 매번 ReactNode로 설정해주는 경우도 있지만, 유틸타입을 만들어 반복 Down!
PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}

// 반응형으로 만드려면 어떻게 해야되지?

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const DialogBox = styled.dialog`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  transform: translate(100%, -100%);
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal;
