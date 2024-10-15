const searchIcon = document.querySelector('.search-icon');
const loginBtn = document.querySelector('.login-btn');
const loginModal = document.querySelector('.login-modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('.search-input');
const submitBtn = document.querySelector(".submit-btn");

searchIcon.addEventListener('click', () => {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
        submitBtn.style.display = 'block';
        searchInput.focus();
    } else {
        searchInput.style.display = 'none';
        submitBtn.style.display = 'none';
    }
});


// const loginBtn = document.querySelector('.login-btn');
// const loginModal = document.querySelector('.login-modal');
// const overlay = document.querySelector('.overlay');
// const closeBtn = document.querySelector('.close-btn');


// loginBtn.addEventListener('click', () => {
//     loginModal.style.display = 'block';
//     overlay.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//     loginModal.style.display = 'none';
//     overlay.style.display = 'none';
// });

// overlay.addEventListener('click', () => {
//     loginModal.style.display = 'none';
//     overlay.style.display = 'none';
// });


// 로그인 버튼 클릭 시 로그인 폼 표시
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    overlay.style.display = 'block';
});

// 닫기 버튼 클릭 시 로그인 폼 숨기기
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
});

// 모달 밖을 클릭 시 로그인 폼 숨기기
overlay.addEventListener('click', () => {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
});

// 검색 기능 처리
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();  // 기본 폼 제출 방지
    const query = searchInput.value.trim();
    if (query) {
        // 원하는 URL로 리디렉션
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
        alert('검색어를 입력해주세요.');
    }  // 검색 입력 값 가져오기
});

