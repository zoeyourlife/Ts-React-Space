import React, { ChangeEvent, useState, useCallback } from "react";
import { Calendar } from "react-calendar";

import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import Modal from "../components/Modal";
import GlobalStyle from "./GlobalStyle";

// export default function Home() {
//   return <></>;
// }

// 구현해야할 부분 ****
/* 
1. react-calendar 기능 부분, 커스텀 design
2. List rendering 부분
3. 모달창 컴포넌트 생성 구현 후 기능 적용(모달 컴포넌트 렌더링)
3.1) 이 방식은 모달이 최상위에 보여지는 것을 보장X,
3.2) 자식 컴포넌트에서 모달 컴포넌트를 렌더링하면 부모 컴포넌트 스타일의 영향을 받을 수도 있음
4. Portal을 이용해보자?
*/

export default function Home() {
  const [date, setDate] = useState(new Date());
  const onClickDayTile = (e: React.MouseEvent<HTMLElement>) => {
    // e.preventDefault();
    alert("you clicked me");
  };

  // Modal 부분 .Modal.tsx<
  // const [isOpen, setIsOpen] = useState(false);

  // const onClickButton = () => {
  //   setIsOpen(true);
  //   console.log(isOpen);
  //   {
  //     isOpen && (
  //       <Modal
  //         open={isOpen}
  //         onClose={() => {
  //           setIsOpen(false);
  //         }}
  //       />
  //     );
  //   }
  // };

  // Modal 부분 .Modal.tsx < 2)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  // 추후에 백 데이터를 받아올 부분
  const [list, setList] = useState<string>("");

  return (
    <StyledContainerDiv>
      <GlobalStyle />
      <StyledCalendarDiv className="app">
        <StyledH2 className="text-center">Calendar</StyledH2>
        <div className="calendar-container">
          <StyledCalendar
            formatDay={(locale, date) =>
              date.toLocaleString("en", { day: "numeric" })
            }
            locale="ko"
            prevLabel={<TbArrowNarrowLeft />}
            nextLabel={<TbArrowNarrowRight />}
            next2Label={null}
            prev2Label={null}
            onChange={setDate}
            minDetail="month"
            // onClickDay={onClickDayTile}
            // onClickDay={onClickButton}
            // Modal 함수 각 Date 클릭 시 마다 모달 생성인데,
            onClickDay={onClickToggleModal}
            value={date}
            showNeighboringMonth={false}
          />
          {/* isOpenModal이 참인 경우 오른쪽을 반환 즉, Modal 컴포넌트 콜백함수 부르기 */}
          {isOpenModal && (
            <Modal onClickToggleModal={onClickToggleModal}>
              <p>이곳에 Modal이 들어감</p>
            </Modal>
          )}
        </div>
        <StyledP className="text-center">
          <span className="bold">선택된 날짜: </span> {date.toDateString()}
        </StyledP>
      </StyledCalendarDiv>
      <StyledListDiv>
        <h2>My List</h2>
        <div>
          <StyledList>
            <span>1. 미니 프로젝트 완성하기</span>
          </StyledList>
          <StyledList>
            <span>1. 미니 프로젝트 완성하기</span>
          </StyledList>
          <StyledList>
            <span>1. 미니 프로젝트 완성하기</span>
          </StyledList>
          <StyledList>
            <span>1. 미니 프로젝트 완성하기</span>
          </StyledList>
        </div>
      </StyledListDiv>
    </StyledContainerDiv>
  );
}

// - #82AAE3
// - #BFEAF5
// - #EAFDFC

// 화면 2분할
const StyledContainerDiv = styled.div`
  display: flex;
`;

// 캘린더 부분 화면의 66%정도 차지
const StyledCalendarDiv = styled.div`
  width: 66%;
`;

// 리스트 부분은 33%정도 차지
const StyledListDiv = styled.div`
  width: 34%;
`;

// 제목글자 시작
const StyledH2 = styled.h2`
  text-align: left;
`;

const StyledP = styled.p`
  text-align: center;
`;

// Calendar 컴포넌트 스타일링
const StyledCalendar = styled(Calendar)`
  position: relative;
  height: 100%;

  // React Calendar의 몸통 부분
  &.react-calendar {
    width: 1000px;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border: none;
    border-radius: 10px;
    box-shadow: 0 12px 24px rgba(202, 222, 225, 0.4);
    line-height: 1.125em;
  }

  // Calendar 년도, 월 선택 부분
  .react-calendar__navigation {
    display: flex;
    height: 50px;
    margin-bottom: 1.5em;

    & button {
      width: 300px;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: lighter;
      transition: all 0.2s;
      color: #111111;
    }
    & button:hover {
      background: #cadde0;
      font-size: 16px;
      color: white;
      transition: all 0.5s;
      cursor: pointer;
    }
  }

  // 요일 밑줄 제거
  abbr[title] {
    text-decoration: none;
    color: #82aae3;
  }

  // 주말은 색다르게 표시
  .react-calendar__month-view__weekdays__weekday:nth-child(6) > abbr[title],
  .react-calendar__month-view__weekdays__weekday:nth-child(7) > abbr[title] {
    color: red;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.75em;
  }

  // calendar 날짜 선택 wrapper
  .react-calendar__viewContainer {
    padding-bottom: 20px;
  }

  // date tile 각각 설정
  .react-calendar__tile {
    max-width: 100%;
    padding: 30px;
    background: none;
    text-align: center;
    line-height: 16px;
    font-size: 12px;
    &--now {
      background: #cadde0;
      &:enabled:hover,
      &:enabled:focus {
        background: #bfeaf5;
      }
    }
  }
`;

// List 스타일링
const StyledList = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  background-color: #eafdfc;
  padding: 12px;
  width: 50%;
  margin-bottom: 30px;
`;
