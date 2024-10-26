let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];

let ticketCard = document.querySelector('.ticketCard-area');
let str = '';
const regionSearch = document.querySelector('.regionSearch');
const searchText = document.querySelector('#searchResult-text');
function renderData(){
    str = '';
    data.forEach(function(item){
        let content = `<li class="ticketCard">
                <div class="ticketCard-img">
                  <a href="#">
                    <img src="${item.imgUrl}" alt="">
                  </a>
                  <div class="ticketCard-region">${item.area}</div>
                  <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                  <div>
                    <h3>
                      <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                      ${item.description}
                    </p>
                  </div>
                  <div class="ticketCard-info">
                    <p class="ticketCard-num">
                      <span><i class="fas fa-exclamation-circle"></i></span>
                      剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                      TWD <span id="ticketCard-price">$${item.price}</span>
                    </p>
                  </div>
                </div>
              </li>`;
        str += content;
      })
    ticketCard.innerHTML = str; 
    searchText.textContent = `本次搜尋共 ${data.length} 筆資料`;
}

renderData();


regionSearch.addEventListener('change',function(){
    let regionValue = regionSearch.value;
    switch(regionValue){
        case '台北':    
            let taipeiArea = data.filter(item => item.area === '台北');
            searchText.textContent = `本次搜尋共 ${taipeiArea.length} 筆資料`;
            str = '';
            taipeiArea.forEach((function(item){
                let content = `<li class="ticketCard">
                <div class="ticketCard-img">
                  <a href="#">
                    <img src="${item.imgUrl}" alt="">
                  </a>
                  <div class="ticketCard-region">${item.area}</div>
                  <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                  <div>
                    <h3>
                      <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                      ${item.description}
                    </p>
                  </div>
                  <div class="ticketCard-info">
                    <p class="ticketCard-num">
                      <span><i class="fas fa-exclamation-circle"></i></span>
                      剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                      TWD <span id="ticketCard-price">$${item.price}</span>
                    </p>
                  </div>
                </div>
              </li>`;
                str += content;
            }));
            ticketCard.innerHTML = str;
            break;

        case '台中':
            let taichungArea = data.filter(item => item.area === '台中');
            searchText.textContent = `本次搜尋共 ${taichungArea.length} 筆資料`;
            str = '';
            taichungArea.forEach((function(item){
                let content = `<li class="ticketCard">
                <div class="ticketCard-img">
                  <a href="#">
                    <img src="${item.imgUrl}" alt="">
                  </a>
                  <div class="ticketCard-region">${item.area}</div>
                  <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                  <div>
                    <h3>
                      <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                      ${item.description}
                    </p>
                  </div>
                  <div class="ticketCard-info">
                    <p class="ticketCard-num">
                      <span><i class="fas fa-exclamation-circle"></i></span>
                      剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                      TWD <span id="ticketCard-price">$${item.price}</span>
                    </p>
                  </div>
                </div>
              </li>`;
                str += content;
            }));
            ticketCard.innerHTML = str;
            break;

        case '高雄':
            let kaohsiungArea = data.filter(item => item.area === '高雄');
            str = '';
            searchText.textContent = `本次搜尋共 ${kaohsiungArea.length} 筆資料`;
            kaohsiungArea.forEach((function(item){
                let content = `<li class="ticketCard">
                <div class="ticketCard-img">
                  <a href="#">
                    <img src="${item.imgUrl}" alt="">
                  </a>
                  <div class="ticketCard-region">${item.area}</div>
                  <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                  <div>
                    <h3>
                      <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                      ${item.description}
                    </p>
                  </div>
                  <div class="ticketCard-info">
                    <p class="ticketCard-num">
                      <span><i class="fas fa-exclamation-circle"></i></span>
                      剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                      TWD <span id="ticketCard-price">$${item.price}</span>
                    </p>
                  </div>
                </div>
              </li>`;
                str += content;
            }));
            ticketCard.innerHTML = str;
            break;

        case '全部':
            renderData();
            break;
    }
})

const btn = document.querySelector('.addTicket-btn');


btn.addEventListener('click',function(){
    let obj = {};
    const input = document.querySelectorAll('.addTicket-input input,.addTicket-input select ,.addTicket-input textarea');
    const alert = document.querySelectorAll('.alert-message p');
    let empty = false;
    input.forEach((input,index) => {
        if(input.value.toString().trim() === ''){
            empty = true;
            alert[index].innerHTML = `<i class="fas fa-exclamation-circle"></i>
                            <span>必填!</span>`;
        }else{
            alert[index].innerHTML = '';
        }
    })

    if(!empty){
        const ticketName = document.querySelector('#ticketName');
        const ticketImgUrl = document.querySelector('#ticketImgUrl');
        const ticketRegion = document.querySelector('#ticketRegion');
        const ticketPrice = document.querySelector('#ticketPrice');
        const ticketNum = document.querySelector('#ticketNum');
        const ticketRate = document.querySelector('#ticketRate');
        const ticketDescription = document.querySelector('#ticketDescription');
        obj.id = data.length;
        obj.name = ticketName.value;
        obj.imgUrl = ticketImgUrl.value;
        obj.area = ticketRegion.value;
        obj.description = ticketDescription.value;
        obj.group = +ticketNum.value;
        obj.price = +ticketPrice.value;
        obj.rate = +ticketRate.value;
        data.push(obj);
        renderData();
    }
})