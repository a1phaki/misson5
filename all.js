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

// 取得票券顯示區域的 DOM 元素
const ticketCard = document.querySelector('.ticketCard-area');

// 取得地區搜尋下拉選單的 DOM 元素
const regionSearch = document.querySelector('.regionSearch');

// 取得顯示搜尋結果數量的 DOM 元素
const searchText = document.querySelector('#searchResult-text');

// 用於儲存生成的 HTML 字串
let str = '';

// 定義渲染資料的函數
function renderData(){
    // 重置 str 變數，準備儲存新的 HTML 字串
    str = '';
    // 遍歷 data 陣列中的每一個項目
    data.forEach(function(item){
         // 根據每一個項目的資料生成 HTML 列表項
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
        str += content; // 將生成的 HTML 字串加入 str
      })
    // 更新票券顯示區的 HTML，顯示生成的內容
    ticketCard.innerHTML = str; 
    // 更新搜尋結果的文字顯示，顯示總資料筆數
    searchText.textContent = `本次搜尋共 ${data.length} 筆資料`;
}

renderData();

// 為 regionSearch 下拉選單添加change事件監聽器
regionSearch.addEventListener('change',function(){
    // 取得當前選取的地區值
    let regionValue = regionSearch.value;
    // 根據選取的地區值進行不同的處理
    switch(regionValue){
        case '台北':    
            // 篩選出地區為「台北」的票券資料
            let taipeiArea = data.filter(item => item.area === '台北');
            // 更新搜尋結果的文字顯示
            searchText.textContent = `本次搜尋共 ${taipeiArea.length} 筆資料`;
            // 重置 str 變數，用來儲存生成的 HTML 字串
            str = '';
            // 將篩選後的資料轉換成 HTML 列表項
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
                str += content;// 將生成的 HTML 字串加入 str
            }));
            // 更新票券顯示區的 HTML
            ticketCard.innerHTML = str;
            break;

        case '台中':
            // 篩選出地區為「台中」的票券資料
            let taichungArea = data.filter(item => item.area === '台中');
            // 更新搜尋結果的文字顯示
            searchText.textContent = `本次搜尋共 ${taichungArea.length} 筆資料`;
            // 重置 str 變數
            str = '';
            // 將篩選後的資料轉換成 HTML 列表項
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
                str += content;// 將生成的 HTML 字串加入 str
            }));
            // 更新票券顯示區的 HTML
            ticketCard.innerHTML = str;
            break;

        case '高雄':
            // 篩選出地區為「高雄」的票券資料
            let kaohsiungArea = data.filter(item => item.area === '高雄');
             // 更新搜尋結果的文字顯示
            searchText.textContent = `本次搜尋共 ${kaohsiungArea.length} 筆資料`;
            // 重置 str 變數
            str = '';
            // 將篩選後的資料轉換成 HTML 列表項
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
                str += content;// 將生成的 HTML 字串加入 str
            }));
            // 更新票券顯示區的 HTML
            ticketCard.innerHTML = str;
            break;

        case '全部':
            // 若選擇「全部」，則重新渲染所有資料
            renderData();
            break;
    }
})

// 選取類別為 'addTicket-btn' 的按鈕元素
const btn = document.querySelector('.addTicket-btn');

// 為 btn 按鈕添加click事件監聽器
btn.addEventListener('click',function(){
    //初始化obj為一物件
    let obj = {};

    //選取所有具有 'addTicket-input' 類別下的 'input'、'select' 和 'textarea'元素
    const input = document.querySelectorAll('.addTicket-input input,.addTicket-input select ,.addTicket-input textarea');

    // 選取所有具有 'alert-message' 類別下的 'p' 元素
    const alert = document.querySelectorAll('.alert-message p');
    let empty = false;
    input.forEach((input,index) => {
        // 檢查輸入的值是否為空
        if(input.value.toString().trim() === ''){
            //標記有空的輸入
            empty = true;
            // 在相應的警告訊息中顯示提示
            alert[index].innerHTML = `<i class="fas fa-exclamation-circle"></i>
                            <span>必填!</span>`;
        }else{
            // 清除警告訊息
            alert[index].innerHTML = '';
        }
    })

    if(!empty){
        // 獲取 ID 為 'ticketName' 的套票名稱輸入框元素
        const ticketName = document.querySelector('#ticketName');
        // 獲取 ID 為 'ticketImgUrl' 的圖片網址輸入框元素
        const ticketImgUrl = document.querySelector('#ticketImgUrl');
        // 獲取 ID 為 'ticketRegion' 的景點地區選擇框元素
        const ticketRegion = document.querySelector('#ticketRegion');
        // 獲取 ID 為 'ticketPrice' 的套票金額輸入框元素
        const ticketPrice = document.querySelector('#ticketPrice');
        // 獲取 ID 為 'ticketNum' 的套票組數輸入框元素
        const ticketNum = document.querySelector('#ticketNum');
        // 獲取 ID 為 'ticketRate' 的套票星級輸入框元素
        const ticketRate = document.querySelector('#ticketRate');
        // 獲取 ID 為 'ticketDescription' 的套票描述文本區域元素
        const ticketDescription = document.querySelector('#ticketDescription');

        obj.id = data.length;

        //將套票名稱賦予到obj.name上
        obj.name = ticketName.value;

        //將圖片網址賦予到obj.imgUrl上
        obj.imgUrl = ticketImgUrl.value;

        //將景點地區賦予到obj.description上
        obj.area = ticketRegion.value;

        //將套票描述賦予到obj.description上
        obj.description = ticketDescription.value;

        //數量為一組以上才能上傳，所以以此來確保最少有一組
        //再將套票組數賦予到obj.price上
        if(+ticketNum.value < 1) ticketNum.value = 1;
        obj.group = +ticketNum.value;

        //價格為0以上才能上傳，所以以此來確保公司不用倒貼錢
        //再將套票價格賦予到obj.price上
        if(+ticketPrice.value < 0) ticketPrice.value = 0;
        obj.price = +ticketPrice.value;

        //因為鍵盤輸入會超過max,min的值，所以在超過max或不足min時，強制設為max,min
        //再將套票星級賦予到obj.rate上
        if(+ticketRate.value > +ticketRate.max){
            ticketRate.value = ticketRate.max;
            obj.rate = +ticketRate.value;
        }else if(+ticketRate.value < +ticketRate.min){
            ticketRate.value = ticketRate.min;
            obj.rate = +ticketRate.value;
        }else{
            obj.rate = +ticketRate.value;
        }
        data.push(obj);
        renderData();
    }
})