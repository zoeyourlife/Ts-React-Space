import React, { ChangeEvent, useState } from "react";
import { Calendar } from "react-calendar";

import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

// export default function Home() {
//   return <></>;
// }

export default function Home() {
  const [date, setDate] = useState(new Date());
  const onClickDayTile = (e: React.MouseEvent<HTMLElement>) => {
    // e.preventDefault();
    alert("you clicked me");
  };

  return (
    <>
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
            onClickDay={onClickDayTile}
            value={date}
            showNeighboringMonth={false}
          />
        </div>
        <StyledP className="text-center">
          <span className="bold">선택된 날짜: </span> {date.toDateString()}
        </StyledP>
      </StyledCalendarDiv>
    </>
  );
}

// - #82AAE3
// - #BFEAF5
// - #EAFDFC

const StyledCalendarDiv = styled.div`
  width: 50%;
`;

const StyledH2 = styled.h2`
  text-align: center;
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
