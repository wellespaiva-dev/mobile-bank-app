import React, {useState, useEffect} from 'react';
import {Container, TimeInformation, Time} from './styles';

export default function Coutdown() {
  const [time, setTime] = useState(0.5 * 60);
  const minutos = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeout(() => {
        setTime(0.5 * 60);
      }, 1000);
    }
  }, [time]);

  const [minuteLeft, minuteRight] = String(minutos).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <TimeInformation>Reset code in</TimeInformation>
      <Time>{minuteLeft}</Time>
      <Time>{minuteRight}</Time>
      <Time>:</Time>
      <Time>{secondLeft}</Time>
      <Time>{secondRight}</Time>
    </Container>
  );
}
