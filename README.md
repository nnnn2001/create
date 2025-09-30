JSX의 주요 규칙 3가지

## 하나의 부모 요소로 감싸기
컴포넌트가 반환하는 모든 JSX 요소는 반드시 <div> 나 <> 같은 하나의 태그로 감싸져 있어야 한다.

## 태그 닫기
<input>이나 <br>처럼 HTML에서는 닫는 태그가 없었던 요소들도 JSX에서는 <input />, <br />처럼 항상 태그를 닫아주어야 한다.

## className 사용
CSS 클래스를 지정할 때는 HTML의 class 속성 대신, JavaScript의 예약어와 충돌을 피하기 위해 className을 사용해야 한다.