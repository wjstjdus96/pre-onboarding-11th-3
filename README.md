# 원티드 프론트엔드 인턴십

3주차 과제 프로젝트

## 프로젝트 소개

[특정 github 레포지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 프로젝트 기간

23.07.11 ~ 23.07.14

## 실행방법

```
$ npm install
$ process.env.REACT_APP_API_KEY="<개인Token>"
$ npm run start
```

## 실행화면

![인턴십과제2](https://github.com/wjstjdus96/pre-onboarding-11th-3/assets/77755620/41dc855f-e489-41f5-893f-841a1377a94d)

## 개발환경

- 언어 : javascript
- 라이브러리 및 프레임워크: react, axios, styled-components, react-router-dom, react-markdown

## 폴더구조

```
/src
┣ 📁apis
┣ 📁components
┣ 📁contexts
┣ 📁constants
┣ 📁hooks
┣ 📁pages
┣ 📁utils
```

## 기능 구현

### API 처리

- api 처리 함수 따로 분리
- axios 인스턴스를 만들어 사용 => 중복되는 부분 최소화

### 전역 상태 관리를 위한 Context API 연동

- 성능 최적화를 위하여 값과 함수를 분리하여 context생성
- 값 context는 isLoading, isFetchLoading, page, issues를 관리
- 함수 context는 loadIssue, loadMoreIssue, toggleLoading, toggleFetchLoading를 관리
- 함수는 재사용을 위해 useMemo로 감싸 불필요한 리렌더링 방지

### 이슈 목록 구현

- 하나의 이슈를 구성하는 IssueCard 컴포넌트를 생성
- isAd props를 받아 true일 경우 광고 이미지를 출력하고 false일 경우 issue 출력하도록 삼항연산자 사용하여 구분

### 인피니티 스크롤 구현

- documentElement의 필드 값을 사용하여 스크롤 이벤트 핸들러 함수 생성
- 현재까지 내려온 높이와 화면의 높이가 전체 높이값보다 같거나 커지면 추가적으로 issue를 불러오도록 로직 적용
- useEffect로 window 이벤트 핸들러로 추가하고 이벤트 리스너 중첩 방지를 위해 이전 리스너는 제거

```typescript
const handleScroll = () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  console.log(scrollTop + clientHeight + " = " + scrollHeight);
  if (
    Math.ceil(scrollTop + clientHeight) >= scrollHeight &&
    isFetchLoading === false
  ) {
    fetchMoreIssues();
  }
};
```

### 광고 이미지 출력

- IssueList에서 `map`을 사용하여 issue를 그려줄 때 index값을 확인하고 특정 index일 경우 isAd가 true인 IssueCard 컴포넌트 반환
  ```typescript
  {
    (idx + 1) % 4 == 0 && <IssueCard isAd={true} />;
  }
  ```

### 데이터 요청 중 로딩 표시

- `keyframe` 사용하여 회전하는 Loading 컴포넌트 생성
- loading 상태에 따라 출력

### 상세 화면 구현

- `useParams` 훅을 사용해 url의 파라미터를 받아 id로 변수 할당
- id를 사용하여 해당 숫자의 issue를 `fetch`함

  ```typescript
  const id = useParams().id;
  const [data, setData] = useState();

  useEffect(() => {
    getOneIssue(id).then((res) => {
      if (res.status == 200) {
        setData(res.data);
      }
    });
  }, []);
  ```

- `react-markdown` 라이브러리를 사용하여 마크다운언어를 렌더링함
