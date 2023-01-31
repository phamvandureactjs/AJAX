
// const list = document.getElementById('list');


// async function getDataFromPublicAPI(){
//     const responseAPI = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
//     const { results }  = await responseAPI.json();
//     console.log('results =>', results);
//     list.innerHTML    = '';
//     results.forEach(result => {
//         const divItem = document.createElement('div');
//         divItem.innerHTML = 
//         `
//             <img src="${results.strMealThumb}" alt="">
//             <div class="detail">
//                 <p>${results.strMeal}</p>
//             </div>
//         `
//         list.appendChild(divItem);
//     });
// }

// getDataFromPublicAPI();


// async function getApi() {
//     const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
//     var data = await response.json();
//     show(data);
//     }
    
    
//     function show(data) {
    
//     let tab =
//     `<div></div>`;
//     for (let lists of data) {
//     tab += `<div>
//                 <img src="${lists.strMealThumb}" alt="">
//                 <div class="detail">
//                      <p>${lists.strMeal}</p>
//                 </div>
//             </div>`;
//     }
//     document.getElementById("list").innerHTML = tab;
//     }
    
//     getApi();



var listAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

function start(){
    getList(renderList);
}
start();



function getList(callback){
    fetch(listAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}
function renderList(lists){
    var listBlock = document.querySelector('#list-courses');
    
        var htmls = lists.meals.map(function(list){
            return `
                <div class="item">
                <img src="${list.strMealThumb}" alt="">
                                 <div class="detail">
                                      <p>${list.strMeal}</p>
                                 </div>
                </div>
                <hr class="item">
            `;
        });
        listBlock.innerHTML = htmls.join('');
    
   
}