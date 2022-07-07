import { useState, useEffect } from "react"
import styled from "styled-components"

const Style = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 700px;
    background-color: black;
  `,
  Other: styled.div`
    color: orange;
    font-size: 14pt;
  `,
  Time: styled.div`
    color: orange;
    font-size: 34pt;
  `,
}

export default function Home() {
  let today = new Date()
  const [time, setTime] = useState(new Date())
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth() + 1)
  const [date, setDate] = useState(today.getDate())

  const Week = ["일", "월", "화", "수", "목", "금", "토"]
  const DayOfWeek = Week[today.getDay()]

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date())
      // setYear
      // setMonth
      // setDate
    }, 1000)
    return () => clearInterval(clock)
  }, [])

  return (
    <Style.Wrapper>
      <Style.Other>현재 시간</Style.Other>
      <Style.Time>{time.toLocaleTimeString()}</Style.Time>
      <Style.Other>
        {year}년 {month}월 {date}일 {DayOfWeek}요일
      </Style.Other>
    </Style.Wrapper>
  )
}

// useEffect()를 사용해서 처음 마운트되었을 때 한 번만 setInterval()을 생성하도록 하려면?
// useEffect()의 두 번째 인자로 빈 배열([])을 전달하면 처음 마운트 되었을 때 한 번만 실행된다.
// useEffect()는 컴포넌트가 언마운트될 때 실행될 정리(clean-up) 함수를 반환할 수 있으므로, clearInterval()을 반환하여 setInterval() 좀비화 방지
// useRef Hook : 컴포넌트에서 특정 DOM을 선택해야 할 때, 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리할 때 사용
// useRef로 관리하는 변수는 값이 바뀌더라도 컴포넌트가 리렌더링되지 않음 !!!
// set .. 필요한가?
