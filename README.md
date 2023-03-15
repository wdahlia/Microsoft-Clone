# Microsoft 클론 코딩
> DeskTop, Tablet, Mobile Size

<br>

### Components
<br>

> `header`

<img width="964" alt="스크린샷 2023-03-15 오후 4 25 42" src="https://user-images.githubusercontent.com/108653518/225239338-f2b39670-7adc-481b-bf39-b1b5fe44e657.png">

- `Nav`
	- `logo`
	- `tabMenu`
		- 컴포넌트 제작 후 { children } prop 받아서 값 제공
		- hover시 :after 로 밑줄 효과 주어야함
	- `Microsoft 전체`
		- ul 태그 내부에 li 형태로 있는 목록들 position으로 나타내줘야함
		- 내부 ul안의 li 목록들 js 파일로 객체 배열 형태로 저장해두고 map 함수 사용해서 가져오기
		- tablet 사이즈 이후로 부터는 햄버거 아이콘 내부로 들어감
	- `searchIcon`
		- 클릭이벤트 시 
		- Desktop : searchInput, 취소 버튼
		- tablet, mobile : searchInput, 뒤로가기 아이콘 버튼

<br>

> `section`


<img width="1228" alt="스크린샷 2023-03-15 오후 3 56 00" src="https://user-images.githubusercontent.com/108653518/225239745-128603da-3e0d-4ba6-86d5-46a51b900abb.png">

- `Carousel`
	- `imageCard` 컴포넌트 재사용
	- carousel.js 파일에 객체 배열 형태로 각 carousel 이미지 내부에 들어갈 정보 담기
	- `btn` 컴포넌트 경우에는 재사용
	- `문자 + >` 컴포넌트 역시 재사용
	- carousel은 무한 자동 슬라이드
	- 슬라이드 일시정지 기능 존재
	- 각 prev, next 아이콘 hover시, x축 transform
<br>

<img width="957" alt="스크린샷 2023-03-15 오후 4 11 50" src="https://user-images.githubusercontent.com/108653518/225239902-ecd0bcfd-9f51-4e0d-910f-a53e945abef6.png">

- `Icon`
	- default css를 window icon으로 설정
	- 각 문구 클릭 시 링크 이동
<br>

> `article`

<img width="100" alt="스크린샷 2023-03-15 오후 1 12" src="https://user-images.githubusercontent.com/108653518/225239999-214eefb4-7a60-4502-bfef-2dd3f45e9a84.png">

- `card`
	- `btn` 컴포넌트 재사용 - props 값 true 일때 btn 붙여주게끔
	- `문자 + >`  컴포넌트 재사용
	- map 함수 사용해서 순회
<br>

<img width="637" alt="스크린샷 2023-03-15 오후 4 31 41" src="https://user-images.githubusercontent.com/108653518/225240283-40e31930-12b4-477e-adcb-87d8739c812c.png">

- `imageCard` 컴포넌트 재사용
- true, false 사용해서 css 위치 바꾸기 기능 `imageCard` 컴포넌트에 추가
<br>

> footer 

<img width="674" alt="스크린샷 2023-03-15 오후 4 36 16" src="https://user-images.githubusercontent.com/108653518/225240415-032ab867-7f26-4154-9f17-d7375ff82e39.png">

- footerNav.js 생성 후 배열 객체 목록 저장 후,
- map 함수 이용해서 return
<br>


> Etc..

<img width="80" alt="스크린샷 2023-03-15 오후 4 33 28" src="https://user-images.githubusercontent.com/108653518/225240464-96e54bd6-f40e-4db0-8832-fc04034381ff.png">

- `btn` 컴포넌트 재사용
- positon sticky 사용 offset에 닿으면 그 순간 부터 fixed 되게끔 구현
- js 코드로 누르면 부드럽게 페이지 상단 위로 올라가게끔 구현
- 페이지 스크롤 시에 보이게 끔 생성