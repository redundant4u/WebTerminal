# WebTerminal

`xtermjs`, `socket.io`, `node-pty` 모듈을 활용한 웹 터미널입니다.

React, nodejs 프레임워크를 활용하였으며, `TypeScript`로 작성하였습니다.

웹 터미널에 대한 설명을 보고 싶다면 다음의 링크에서 확인할 수 있습니다.

- [이론편](https://redundant4u.notion.site/xterm-js-node-pty-rollup-d9b2ce9130c542ea883269135d893f8c)
- [프론트엔드편](https://redundant4u.notion.site/xterm-js-node-pty-rollup-dddf0db05a8e4c28875b11740401e422)
- [백엔드편](https://redundant4u.notion.site/xterm-js-node-pty-rollup-1a2987d7ef6e41c999aee93d4cad0bbe)

## 구조도 요약

<img src="https://user-images.githubusercontent.com/38307839/196089143-e0970714-c662-4ca1-aa07-c5281e5a6e77.svg" alt="structure_overview">

## 실행

### docker

- 첫 docker 실행은 의존성 설치로 몇 분이 소요됩니다.
- react, nodejs 2개의 컨테이너가 생성됩니다.

```bash
cd docker
./run.sh
```

### 수동 설정

#### 프론트엔드

1. 모듈 설치

   ```bash
   cd frontend
   yarn

   cd lib
   yarn
   ```

2. 모듈 link 걸어주기

   ```bash
   cd frontend/lib
   yarn link

   cd ..
   yarn link webterminal
   ```

3. 실행하기
   ```bash
   # 3000 포트로 실행
   cd frontend
   yarn dev
   ```

#### 백엔드

`node-pty` 모듈을 사용하기 위해서 make, python, gcc와 같은 도구들이 필요합니다. 자세한 사항은 [node-pty repository](https://github.com/microsoft/node-pty)를 참고해주세요.

1. 모듈 설치
   ```bash
   cd server
   yarn
   ```
2. 실행하기
   ```bash
   # 3001 포트로 실행
   yarn dev
   ```

## 시연 예제

<img src="https://user-images.githubusercontent.com/38307839/196090569-97411492-3043-4f8d-9ce5-fd3d16148ca3.gif" alt="example_gif">
