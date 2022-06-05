# epoch-ISO8601-converter

> 사용한 프레임워크: express 

epoch를 요청하면 해당 epoch를 변환한 ISO8601 string을 json 형태로 응답하는 RESTful API 서버

## 실행 방법

```bash
# 디펜던시 설치
$ npm install

# nodemon으로 서버 실행
$ npm start

# 5100번 포트로 epoch를 요청 ex) localhost:5100/1654424647
$ localhost:5100/epoch
```

---

### `service/convertFromEpochToISO8601.js`

전달받은 epoch를 ISO8601 string으로 반환하는 함수입니다.

### `app.js`

5100번 포트로 실행되는 서버입니다.

---

## 코드 스타일

```
feat        새로운 기능을 제공합니다.
docs        문서만 변경됩니다.
chore       빌드 프로세스 또는 보조 도구 및 라이브러리(예: 문서 생성)에 대한 변경 사항.
fix         버그 수정.
```