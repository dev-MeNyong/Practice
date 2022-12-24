# Do it! 웹사이트 따라 만들기    
20221224

문제1

비쥬얼 스튜디오 코드 컴파일 중 갑자기 연결이 안되는 현상 발생

"localhost에서 연결을 거부했습니다."

**해결 방법**

launch.json 파일에 

 "file": "${workspaceFolder}/Numberstring/index.html"

(파일 경로)을 작성해줌
