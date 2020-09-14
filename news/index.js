var API_URL='http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-14&sortBy=publishedAt&apiKey=9b017d9c85e140f58bd094de3f1b99d3';
window.onload=function () {
    getNewsData();
};
function  getNewsData() {
    fetch(API_URL,{
        method:'GET',
    }).
    then(response=>response.json()).
    then(data=>diplayDatFromAPI(data)).
    catch(function (error) {
        document.getElementById('loader').style.display='none';
        document.getElementById('error').style.display='block';

    });

}
function retryData() {
    document.getElementById('loader').style.display='block';
    document.getElementById('error').style.display='none';
    getNewsData();
}
function diplayDatFromAPI(data) {
    var html="";
    data.articles.forEach(function (value) {
        html=html+`<a href=`+value.url+` target="_blank"><div style="margin-top: 20px">
            <div class="title">${value.title}</div>
            <img src=`+value.urlToImage+` class="image">
            <div class="news-fotter">
                <div>`+value.source.name+` : <br/> `+value.author+`
                </div>
                <div>`+value.publishedAt+`</div>
            </div>
            <div class="contnet">`+value.content+`</div>

        </div></a>`;
    });
    document.getElementById('news').innerHTML=html;
    document.getElementById('loader').style.display='none';

}
