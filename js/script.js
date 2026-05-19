$(document).ready(function () {

    $('#fullpage').fullpage({
        responsiveWidth: 480,
        scrollOverflow: true,
        navigation: true,
        scrollingSpeed: 1000,
        anchors: ['first', 'second', 'third', 'fourth'],
        afterLoad: function (anchorLink, index) {
            const $header = $('header');
            const $section = $('.section').eq(index - 1);

            $header.removeClass('light dark');

            if ($section.hasClass('light')) {
                $header.addClass('light');
            } else {
                $header.addClass('dark');
            }

            $('.downbtn a').on('click', function (e) {
              e.preventDefault();
          
              const currentSection = $(this).closest('.section');
              const currentIndex = currentSection.index();
          
              $.fn.fullpage.moveTo(currentIndex + 2);
          });
          $('.upbtn a').on('click', function (e) {
            e.preventDefault();
            $.fn.fullpage.moveTo(1);
        });
          $('.logo').on('click', function (e) {
            e.preventDefault();
            $.fn.fullpage.moveTo(1);
        });
        if (index == 1) {
          $('.upbtn').fadeOut();
      } else {
          $('.upbtn').fadeIn();
      }
        }

    });
    
    const dateEl = document.querySelector(".date");

    const today = new Date();

    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const year = today.getFullYear();
     const month = String(today.getMonth() + 1).padStart(2, "0");
     const date = String(today.getDate()).padStart(2, "0");
    const day = week[today.getDay()];

    dateEl.textContent = `${year} ${month} ${date} ${day}`;

    $(".mobilebtn").on("click", function (e) {

      e.preventDefault();
  
      $(this).toggleClass("active");
      $(".mobilemenu").toggleClass("open");
  
  });
  
  $(window).on("resize", function () {
  
      if ($(window).width() > 480) {
  
          $(".mobilemenu").removeClass("open");
          $(".mobilebtn").removeClass("active");
  
      }
  
  });
})

const palettes = [
    { bg: "linear-gradient(145deg,#1a3a52,#2a6fa8)", deco: "circles", accent: "#5ba3d0" },
    { bg: "linear-gradient(145deg,#0f2744,#1a5276)", deco: "lines", accent: "#3498db" },
    { bg: "linear-gradient(145deg,#2c3e50,#4a7fa0)", deco: "dots", accent: "#7fb3d3" },
    { bg: "linear-gradient(145deg,#1b4f72,#2980b9)", deco: "circles", accent: "#85c1e9" },
    { bg: "linear-gradient(145deg,#154360,#1a6fa8)", deco: "lines", accent: "#5dade2" },
    { bg: "linear-gradient(145deg,#0e3460,#2471a3)", deco: "dots", accent: "#7fb3d3" },
    { bg: "linear-gradient(145deg,#17202a,#2e4057)", deco: "circles", accent: "#5b8fa8" },
    { bg: "linear-gradient(145deg,#1c2833,#2e6da4)", deco: "lines", accent: "#6ab0de" },
    { bg: "linear-gradient(145deg,#212f3c,#1f618d)", deco: "dots", accent: "#7fb3d3" },
    { bg: "linear-gradient(145deg,#0b2545,#13547a)", deco: "circles", accent: "#4d9abf" },
  ];
  
  function decoSVG(type, accent) {
    const a = accent + "55";
    if (type === "circles") return `
      <svg width="100%" height="100%" viewBox="0 0 160 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <circle cx="120" cy="40" r="55" fill="none" stroke="${a}" stroke-width="1.5"/>
        <circle cx="120" cy="40" r="35" fill="none" stroke="${a}" stroke-width="1"/>
        <circle cx="30" cy="170" r="45" fill="none" stroke="${a}" stroke-width="1.5"/>
        <circle cx="80" cy="120" r="20" fill="${accent}22"/>
      </svg>`;
    if (type === "lines") return `
      <svg width="100%" height="100%" viewBox="0 0 160 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <line x1="0" y1="60" x2="160" y2="120" stroke="${a}" stroke-width="1"/>
        <line x1="0" y1="90" x2="160" y2="150" stroke="${a}" stroke-width="0.8"/>
        <line x1="0" y1="120" x2="160" y2="180" stroke="${a}" stroke-width="1.2"/>
        <rect x="100" y="20" width="40" height="40" rx="4" fill="none" stroke="${a}" stroke-width="1"/>
        <rect x="110" y="30" width="20" height="20" rx="2" fill="${accent}22"/>
      </svg>`;
    return `
      <svg width="100%" height="100%" viewBox="0 0 160 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        ${Array.from({length:20}, (_,i) => {
          const x = (i%5)*32+10, y = Math.floor(i/5)*48+20;
          return `<circle cx="${x}" cy="${y}" r="2.5" fill="${accent}44"/>`;
        }).join('')}
        <rect x="90" y="130" width="50" height="60" rx="4" fill="none" stroke="${a}" stroke-width="1"/>
      </svg>`;
  }
  
  const data = {
    monthly: [
      { title: "채식주의자", author: "한강", comment: "언어를 초월한 깊은 울림", genre: "소설", badge: "이달의 책" },
      { title: "무소유", author: "법정", comment: "비움으로써 채워지는 삶의 지혜", genre: "에세이", badge: null },
      { title: "아몬드", author: "손원평", comment: "감정 없는 소년이 세상과 마주하다", genre: "소설", badge: "추천" },
      { title: "불편한 편의점", author: "김호연", comment: "따뜻한 위로가 필요할 때", genre: "소설", badge: null },
      { title: "달러구트 꿈 백화점", author: "이미예", comment: "꿈을 파는 백화점의 기묘한 이야기", genre: "판타지", badge: null },
    ],
    season: [
      { title: "봄밤", author: "편혜영", comment: "봄처럼 스며드는 서늘한 감정", genre: "소설", badge: "봄 추천" },
      { title: "완전한 행복", author: "정유정", comment: "행복의 이면에 감춰진 진실", genre: "스릴러", badge: null },
      { title: "나는 나로 살기로 했다", author: "김수현", comment: "자신을 되찾는 담담한 고백", genre: "에세이", badge: null },
      { title: "지구에서 한아뿐", author: "이금이", comment: "성장과 연대의 따뜻한 이야기", genre: "청소년", badge: null },
    ],
    topic: [
      { title: "트렌드 코리아 2025", author: "김난도 외", comment: "올해의 흐름을 한눈에 읽다", genre: "트렌드", badge: "베스트" },
      { title: "역행자", author: "자청", comment: "운명을 거스르는 7단계 공식", genre: "자기계발", badge: null },
      { title: "사피엔스", author: "유발 하라리", comment: "인류 역사를 새로운 눈으로", genre: "역사", badge: null },
      { title: "파친코", author: "이민진", comment: "재일 교포 4대의 장대한 서사", genre: "소설", badge: "인생책" },
      { title: "미드나잇 라이브러리", author: "매트 헤이그", comment: "또 다른 삶의 가능성을 찾아서", genre: "소설", badge: null },
    ],
    new: [
      { title: "친애하는 나에게", author: "최은영", comment: "나 자신에게 건네는 위로의 편지", genre: "소설", badge: "신착" },
      { title: "불편한 편의점 2", author: "김호연", comment: "다시 찾아온 따뜻한 이야기", genre: "소설", badge: "신착" },
      { title: "세이노의 가르침", author: "세이노", comment: "삶의 본질을 꿰뚫는 직언", genre: "자기계발", badge: "신착" },
    ]
  };
  
  function makeCover(b, idx) {
    const p = palettes[idx % palettes.length];
    return `
      <div class="book-cover" style="background:${p.bg};">
        <div class="cover-deco">${decoSVG(p.deco, p.accent)}</div>
        ${b.badge ? `<span class="badge">${b.badge}</span>` : ''}
        <div class="cover-inner">
          <div class="cover-top">
            <div class="cover-genre-tag">${b.genre}</div>
            <div class="cover-title">${b.title}</div>
          </div>
          <div class="cover-bottom">
            <div class="cover-line"></div>
            <div class="cover-author">${b.author}</div>
          </div>
        </div>
      </div>`;
  }
  
  function renderBooks(tab) {
    const books = data[tab];
    document.getElementById('booksGrid').innerHTML = books.map((b, i) => `
      <div class="book-card">
        ${makeCover(b, i)}
        <div class="book-title">${b.title}</div>
        <div class="book-author">${b.author}</div>
        <div class="book-comment">${b.comment}</div>
        <div class="book-footer">
          <span class="genre-tag">${b.genre}</span>
          <a href="#" class="more-link">자세히 &rarr;</a>
        </div>
      </div>`).join('');
  }
  
  function setTab(btn, tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBooks(tab);
  }
  
  renderBooks('monthly');