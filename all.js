let data = []

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
    .then(function(response){
        data = response.data.data;
        renderData(data);
        chartGenerate(data);
    })
    .catch(function(error){
        console.log(error);
    })
// 取得票券顯示區域的 DOM 元素
const ticketCard = document.querySelector('.ticketCard-area');

// 取得地區搜尋下拉選單的 DOM 元素
const regionSearch = document.querySelector('.regionSearch');

// 取得顯示搜尋結果數量的 DOM 元素
const searchText = document.querySelector('#searchResult-text');

// 用於儲存生成的 HTML 字串
let str = '';

const cantFind = document.querySelector('.cantFind-area');


// 定義渲染資料的函數
function renderData(dataArr){
    // 重置 str 變數，準備儲存新的 HTML 字串
    str = '';
    // 遍歷 data 陣列中的每一個項目
    dataArr.forEach(function(item){
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
    searchText.textContent = `本次搜尋共 ${dataArr.length} 筆資料`;
}



// 為 regionSearch 下拉選單添加change事件監聽器
regionSearch.addEventListener('change',function(){
    // 取得當前選取的地區值
    let result = data.filter(item => {
      if(item.area === regionSearch.value){
        return true;
      }else if(regionSearch.value === '全部' ){
        return true;
      }else{
        return false;
      }
    })
    console.log(result);
    if(result.length === 0){
      renderData(result);
      cantFind.setAttribute('style','display:block');
    }else{
      renderData(result);
    }
    
    // 根據選取的地區值進行不同的處理
})

// 選取類別為 'addTicket-btn' 的按鈕元素
const btn = document.querySelector('.addTicket-btn');
const addTicketForm = document.querySelector('.addTicket-form');
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

// 監聽套票金額變更事件
ticketPrice.addEventListener('change',function(){
    //價格為0以上才能上傳，所以以此來確保公司不用倒貼錢
    if(+ticketPrice.value < 0 ) ticketPrice.value = 0;
})
// 監聽套票組數變更事件
ticketNum.addEventListener('change',function(){
    //數量為一組以上才能上傳，所以以此來確保最少有一組
    if(+ticketNum.value < 1 ) ticketNum.value = 1;
})


ticketRate.addEventListener('change',function(){
    //因為鍵盤輸入會超過max,min的值，所以在超過max或不足min時，強制設為max,min
    if(+ticketRate.value > +ticketRate.max){
        ticketRate.value = ticketRate.max;
    }else if(+ticketRate.value < +ticketRate.min){
        ticketRate.value = ticketRate.min;
    }
})

// 為 btn 按鈕添加click事件監聽器
btn.addEventListener('click',function(){
    //初始化obj為一物件
    let obj = {};

    //選取所有具有 'addTicket-input' 類別下的 'input'、'select' 和 'textarea'元素
    const input = document.querySelectorAll('.addTicket-input input,.addTicket-input select ,.addTicket-input textarea');

    // 選取所有具有 'alert-message' 類別下的 'p' 元素
    const alert = document.querySelectorAll('.alert-message p');
    // 初始化空值標記為 false
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
    });

    // 檢查是否有空的輸入
    if(!empty){
        
        obj.id = data.length;

        //將套票名稱賦予到obj.name上
        obj.name = ticketName.value;

        //將圖片網址賦予到obj.imgUrl上
        obj.imgUrl = ticketImgUrl.value;

        //將景點地區賦予到obj.description上
        obj.area = ticketRegion.value;

        //將套票描述賦予到obj.description上
        obj.description = ticketDescription.value;

        //將套票組數賦予到obj.price上
        obj.group = +ticketNum.value;

        //將套票價格賦予到obj.price上
        obj.price = +ticketPrice.value;

        //將套票星級賦予到obj.rate上
        obj.rate = +ticketRate.value;
        
        // 將新的物件添加到數據陣列中
        data.push(obj);

        regionSearch.value = '全部'
        // 渲染數據，更新顯示的內容
        renderData(data);
        chartUpdate(data);
        //清空表單
        addTicketForm.reset();
    }
})

function chartDataUpdata(data){
  let chartData = [];
  data.forEach(ticket =>{
    const existingArea = chartData.find(areas => areas.area === ticket.area);
    
    if (existingArea) {
      // 如果已存在，增加計數
      existingArea.count += 1;
    } else {
      // 如果不存在，新增該區域的物件
      chartData.push({ area: ticket.area, count: 1 });
    }
  })
  return chartData.map(areas => [areas.area, areas.count]);
}

let chart;
function chartGenerate(data){
  let chartData = chartDataUpdata(data);
  let groups = chartData.map(areas => areas[0]);
  chart = c3.generate({
    bindto: '#chart', // HTML 元素綁定
    data: {
        columns: chartData,
        type : 'donut',
        // labels: false // 設為 false 以隱藏數據標籤
    },
    size: {
      width: 200,
      height:200
    },
    donut: {
        title: "套票地區比重",
        width: 15,
        label: {
          show: false // 隱藏百分比標籤
      }
    },
    groups: [groups]
  });
}

function chartUpdate(data){
  let chartData = chartDataUpdata(data);
  chart.unload(); // 卸載所有舊的數據
  chart.load({
      columns: chartData
  });
}