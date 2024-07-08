// var age = 10;

// if (age >= 18){
//     type = 'adult'
// }else {
//     type = 'child'
// }

// console.log(type);

// Ternary Operator 
// var type = (age >= 18) ? 'adult' : 'Child';
// console.log(type);


//*Array. Prototype.find()


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// var result = numbers.find(function (currentValue){
//     return currentValue > 4;
// });

// console.log(result);

// function test (){
//     return 'gias';

// }

// const result = test ();
// console.log(result);


// const a = 10;
// const b = 20;

// const  sum = a+b;

// const test  = async ()=> {
//     const response = await fetch(`https://openapi.programming-hero.com/api/news/category/01`);
//     const data =await response.json();
//     console.log(data);
//     // console.log('hi from function ');

// }

// test()


// console.log(sum);

//*Step 01
const loadCategory = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();

    const categoryBarContainer = document.getElementById('category-bar-container');

    data.data.news_category.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `<button onclick="loadNews('${item.category_id}')">${item.category_name}</button>`;

        categoryBarContainer.appendChild(div);
    })
}

//*step 02
const loadNews = async (catId) => {
    // console.log(catId);

    document.getElementById('loading-spiner').style.display = "block"

    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const AllData = await res.json();
    // console.log(data.data);
    const newsContainer = document.getElementById('news-container');


    newsContainer.innerHTML = ' ';

    AllData.data.forEach((items) => {
        document.getElementById('loading-spiner').style.display = "none"
        // console.log(items);
        const div = document.createElement('div');
        div.classList.add('content-container');
        div.innerHTML = `
        <div class="image-box">
                <img src="${items.image_url}" alt="">
            </div>
            <div class="content-box">
                <h4>${items.title}</h4>
                <p>${items.details.slice(0, 200)}</p>
                <div>
                    <div class="profile-name-container">
                        <div class="profile"><img src="${items.author.img}" alt=""></div>
                        <div>
                            <p>${items.author.name}</p>
                            <p>${items.author.
                published_date
            }</p>
                        </div>
                        <button onclick="DetailsCheck('${items.title}')" class="Details">Details</button>
                    </div>
                    
                </div>
            </div>
        `

        newsContainer.appendChild(div);
    })
}

//*Step 03
const handleSearch = () => {
    const value = document.getElementById('search-box').value;
    if (value) {
        loadNews(value)
    } else {
        alert('Please enter a valid catId')
    }
    console.log(value);

}

const DetailsCheck = (text) => {
    console.log(text);
}
// DetailsCheck();


loadNews("01");

loadCategory();










const callApi = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories');
    const data2 = await response.json();

    const navBarContainer = document.getElementById('nav-bar-container');

    data2.data.news_category.forEach((e) => {

        const div = document.createElement('div');
        div.innerHTML = `<button>${e.category_name}</button>`;

        navBarContainer.appendChild(div)


        // console.log(items);

    })
}
callApi();


const moneyBag = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/news/categories');
    const datas = await res.json();
    // console.log(datas.data.news_category);
    datas.data.category_name.forEach((filter) => {
        console.log(filter.category_name);
    })

}
moneyBag();



const airpod = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/news/categories');
    const show = await res.json();
    console.log(show.data.news_category);
}
airpod();


// practice Example here
const watch = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const output = data.data.news_category;

    const watchVarContainer = document.getElementById('watch-var-container');

    data.data.output.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `<button> ${item.category_name} </button>`;

        watchVarContainer.appendChild(div)
    })
    console.log(output);
}

watch();
