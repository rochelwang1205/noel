import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

let data = [
    {
      "id": 0,
      "title": "星際旅行訂票平台",
      "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image1.png?raw=true",
      "description": "悠遊宇宙的夢想，從這裡開始實現",
      "tags":[
        "網頁設計", "響應式設計", "Bootstrap"
      ]
    },
  {
      "id": 1,
      "title": "理財App",
      "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image2.png?raw=true",
      "description": "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
      "tags":[
        "APP設計", "iOS", "React"
      ]
    },
  {
      "id": 2,
      "title": "醫美診所官網",
      "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image3.png?raw=true",
      "description": "永保青春的秘密，從粹究開始",
      "tags":[
        "網頁設計", "響應式設計", "ＷordPress"
      ]
    },
  {
      "id": 3,
      "title": "美美美早餐店 POS 機 UI Design",
      "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true",
      "description": "訂單送單一目瞭然，自動報表分析好輕鬆",
      "tags":[
        "UI 設計", "前端開發", "Wix"
      ]
    },
   
  
  ];
const list = document.querySelector(".portfolio-allCard");
let str ='';
data.forEach(function(item){
  str+=` <li class="portfolio-card col col-12 col-md-6">
      <a href="#"><img src="${item.imgUrl}" alt="portfolio_showcase" class="portfolio-cardImg img-fluid d-block portfolio-border"></a>
      <div class="ms-3">
        <h3 class="noto-sans portfolio-cardTitle">${item.title}</h3>
        <p class="noto-sans portfolio-cardText">${item.description}</p>
        <div class="tags noto-sans portfolio-cardTags">
          <span>${item.tags[0]}</span>
          <span>${item.tags[1]}</span>
          <span>${item.tags[2]}</span>
        </div>
      </div>
      </li>`;
})
list.innerHTML = str;