# Readme
Here notes key point in the course
- [x] C1 - Basic HTML 
- [x] C2 - CSS common usage
- [x] C3 - Block an Inline Element
- [ ] C4 - Flex-layout
- [ ] C4 - Flex more
- [x] C5 - Layout I
- [x] C5 - Layout II
- [x] C6 - Crop Img
- [x] C7 - Form
- [x] C8 - CSS3 tips
- [x] C9 - Like a master
- [x] C10 - Multi-pages

<!-- vscode-markdown-toc -->
* 1. [Chapter 2 CSS](#Chapter2CSS)
	* 1.1. [CSS frequent error](#CSSfrequenterror)
	* 1.2. [How check css is set in right way](#Howcheckcssissetinrightway)
	* 1.3. [Tips](#Tips)
* 2. [Chapter 3 Container](#Chapter3Container)
	* 2.1. [CSS Reset](#CSSReset)
	* 2.2. [Container-Block element](#Container-Blockelement)
	* 2.3. [Container-Inline element](#Container-Inlineelement)
	* 2.4. [Container-Div](#Container-Div)
	* 2.5. [Box Model](#BoxModel)
	* 2.6. [vertical middle setting](#verticalmiddlesetting)
	* 2.7. [Block Align v.s Text/Content Align](#BlockAlignv.sTextContentAlign)
	* 2.8. [boxing-size](#boxing-size)
	* 2.9. [When can I use Div or Span](#WhencanIuseDivorSpan)
	* 2.10. [Tips](#Tips-1)
* 3. [Chapter 5 Layout I](#Chapter5LayoutI)
	* 3.1. [Float](#Float)
	* 3.2. [Clear](#Clear)
	* 3.3. [Multiple Column](#MultipleColumn)
* 4. [Chapter 5 Layout II](#Chapter5LayoutII)
	* 4.1. [Position](#Position)
* 5. [Chapter 5 Layout II](#Chapter5LayoutII-1)
	* 5.1. [background](#background)
* 6. [Chapter 7 Form](#Chapter7Form)
	* 6.1. [Table](#Table)
	* 6.2. [Form](#Form)
* 7. [Chapter 8 CSS3 Tips](#Chapter8CSS3Tips)
* 8. [Chapter 9 Like a master](#Chapter9Likeamaster)
	* 8.1. [CSS Priority](#CSSPriority)
	* 8.2. [How to organize the design layout when you get it in the first place](#Howtoorganizethedesignlayoutwhenyougetitinthefirstplace)
	* 8.3. [Deatils of Header](#DeatilsofHeader)
	* 8.4. [Tips](#Tips-1)
* 9. [Chapter 10 Multi-pages](#Chapter10Multi-pages)
	* 9.1. [Maintain css files](#Maintaincssfiles)
* 10. [More](#More)
* 11. [Javascript](#Javascript)
	* 11.1. [DOM](#DOM)
	* 11.2. [Event](#Event)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Chapter2CSS'></a>Chapter 2 CSS
###  1.1. <a name='CSSfrequenterror'></a>CSS frequent error
- vocabulary error
- lost ; or pair of { }
- loading wrong files cuz path error
- forgot the `dot` of class

###  1.2. <a name='Howcheckcssissetinrightway'></a>How check css is set in right way
1. open Chrome
2. F12 or right click and select Inspect
3. see the right corner of panel, it shows the css that wrote in which file.
    > ex: filename.css: 322(line)

###  1.3. <a name='Tips'></a>Tips
- `lorem{20}` can genrate 20 words automatically
-  emmet: ul>li*2
-  do research on some news website to learn from them

##  2. <a name='Chapter3Container'></a>Chapter 3 Container
> Layout is about how to design containers

###  2.1. <a name='CSSReset'></a>CSS Reset
- clean default setting of browser
- meyerweb is common and suitable beginner
- the later css covers the previous css

###  2.2. <a name='Container-Blockelement'></a>Container: Block element
> div, h1~h6, p, ul, ol, li, dl, dt, dd
> 
> table, form, 

- 盡可能的佔滿整個版面,會依照父元素的寬度自適應延伸寬度(佔滿)
- 會另起一行呈現
- 沒有設定寬度就會是滿版(如第一點),寬度總是 100%，除非有特別設定它的寬度
- default display is `block`
- 如果想把區塊改成行內, 把display改成 inline
- 高度、行高、Padding、Margin 都可以控制
- 整行都可以點到

###  2.3. <a name='Container-Inlineelement'></a>Container: Inline element
> a, span, strong, em, img, input, abbr, i, label
>
> select, span, b, br, textarea

- default display is `inline`
- 比較常用在段落裡面
- span 本身不代表任何意思, 用來點綴樣式, 排版用的行內標籤
- 和其它元素都在一行線上
- 行內元素沒辦法設定寬高
  - 如果想把行內改成區塊, 把display改成 block
  - 為了讓連結好點擊到, 通常會把 `a` display改為block, 讓他比較大顆一點, 點擊位置大一點, 不管點哪裡都點的到
- Margin 只有設定左右有效 ; Padding 設定上下左右有效，會撐大空間
- 只能點到元素本身
- inline element 置中對齊用 `vertical-align: middle` 

###  2.4. <a name='Container-Div'></a>Container: Div
- 沒有語意, 單純拿來排版的標籤
- 後代選擇器
> .class a { }
> 
> .class .class { }
- 網頁排版包含
  - header
  - menu
  - content
  - footer

###  2.5. <a name='BoxModel'></a>Box Model
- 任何元素都一定會涵蓋自己的寬高與自己的盒模型
- padding, border 都會被列入實際的寬度和高度
- margin 不會被列入實際寬高

###  2.6. <a name='verticalmiddlesetting'></a>vertical middle setting
- `margin: 0 auto;`
- do not hard code the height instead of using `padding` to leave space

###  2.7. <a name='BlockAlignv.sTextContentAlign'></a>Block Align v.s Text/Content Align
- use it in text or inside of content in block
  > text-align: center;
- whole block
  > margin: 0 auto; 

###  2.8. <a name='boxing-size'></a>boxing-size
- set the style into the whole html tag 
```
*,*:before,*:after
```

###  2.9. <a name='WhencanIuseDivorSpan'></a>When can I use Div or Span
it depends on that area, 
- div is block element; span is inline element
- if that area is a block, then use div. vice versa

```
<h2>標題<span>二</span></h2>

// h2底下的span
.style h2 span {
  font-size: 20px;
}

// .style底下全部的span
.style span {
  color: red
}
```
###  2.10. <a name='Tips-1'></a>Tips
- 想要檢查元素是區塊或行內, 用background-color顯示出來後檢查看看
- 高度不寫死, 用padding留白
- 推擠方向要一致
- 如果沒有設定到,就會繼承父層設定

##  3. <a name='Chapter5LayoutI'></a>Chapter 5 Layout I

Nowadays, flexbox is more flexible than float and more and more browser support. It common uses flexbox to do layouting. On the other hand, as a frontend developer still should understand the basic concept of float. It's useful to maintain some old websites.
###  3.1. <a name='Float'></a>Float
- float 並排對齊
- float depends on parent, if there is no div, then it rely on browser
- float: left 靠左對齊; float: right 靠右對齊
- 元素想要並排時使用

###  3.2. <a name='Clear'></a>Clear
- 當並排元素外的緊鄰附近,用clear 清除float
- set clear in the last float
  > clear: both; // 全部都清掉
- another way to clear float
  ```
  .clearfix:after{
    content:'';
    display:table;
    clear:both;
  }
  ```
###  3.3. <a name='MultipleColumn'></a>Multiple Column
- use margin to set space of column
- use container to cover menu and content for setting margin-bottom
- if height of header or footer are fixed, content must use padding to leave space for flexible set custom class.

##  4. <a name='Chapter5LayoutII'></a>Chapter 5 Layout II
###  4.1. <a name='Position'></a>Position
- **absolute and relative**
  - the element needs **overlap** the outside element, which set position as "absolute" and outside one set position as "relative". So that absolute can find the relative element as position coordinate(座標). If there is no relative element, it will base on the browser from left top to right bottom.

  - position of absolute can set [top],[bottom],[right],[left] as nagtive number and it would not occupy any space on div.

- **z-index**
  - the number is biger then the level is higher.
  - set it from 1 to 30. don't more than 30. It will hard to handle the element.

- **fixed**
  - the element can fixed on the page and it doesn't disappear when you scrolling.
  - it's usually display an element that visitors frequently use.

- Example
  ```
  .header {
    width: 300px;
    height: 200px;
    border: 1px solid red;
    position: relative;
  }

  .box {
    width: 100px;
    height: 100px;
    background: black;
    position: absolute;
    /* can set nagtive number */
    right: 0;
    bottom: -10px;
    /* the number is biger then the level is higher */
    z-index: 10;
  }

  .box2 {
    width: 100px;
    height: 100px;
    background: pink;
    position: absolute;
    /* can set nagtive number */
    right: -40px;
    bottom: -10px;
    z-index: 9;
  }

  /* position: fixed */
  .box3 {
    height: 150px;
    width: 150px;
    background: black;
    position: fixed;
    right: 0;
    bottom: 0;
  }
  ```

##  5. <a name='Chapter5LayoutII-1'></a>Chapter 5 Layout II
###  5.1. <a name='background'></a>background
1. **background-repeat** 
  - it makes picture that has gradual(漸層) effect also it can decrease memory in the project, which can speed up the browser to render the page.
  ```
  .box {
    width: 800px;
    /* height: 500px; */
    background-image: url("../assets/test.jpg");
    background-repeat: repeat-x;
    background-color: #afc0da;
  }
  ```

2. **background-color**
  - mix **background-image** and **background-color** together, which can use the space to do other design. This sample helps us to understand the difference between b-image and b-color
  ```
  .logo {
    width: 200px;
    height: 200px;
    background-image: url("../assets/simtree.png");
    background-repeat: no-repeat;
    background-color: red;
  }
  ```

3. **background-position: x y**
  - adjust the position of the image, x and y can be [right bottom] or [85% 90%]
  ```
  .logo {
    width: 200px;
    height: 200px;
    background-image: url("../assets/simtree.png");
    background-repeat: no-repeat;
    background-color: red;
    background-position: right bottom;
  }
  ```
4. **background abbreviation**
```
background-image: url("../assets/simtree.png");
background-repeat: no-repeat;
background-color: red;
background-position: right bottom;

->> background: url() no-repeat red 90% 90%;
```
5. image replace to text
  - h1 allows web crawler(網路爬蟲) to know the name of the website, at the same time, this way helps the website more simple and clean
  ```
  .header h1 {
    float: left;
  }

  .header h1 a {
    background-image: url(../assets/simtree.png);
    width: 73px;
    height: 73px;
    display: block;
    /* 圖片替代文字 */
    /* 首行縮排 */
    text-indent: 101%;
    /* 超出div距離就會消失*/
    overflow: hidden;
    /* 東西都在第一行上面, 不斷行 */
    white-space: nowrap;
  }
  ```
##  6. <a name='Chapter7Form'></a>Chapter 7 Form
###  6.1. <a name='Table'></a>Table
- tr: table row; th: table header
- tr > (th) > td

  ```
    <table>
      <tr>
        <th>title 1</th>
        <th>title 2</th>
        <th>title 3</th>
      </tr>
      <tr>
        <td>content 1</td>
        <td>content 2</td>
        <td>content 3</td>
      </tr>
    </table>
  ```

###  6.2. <a name='Form'></a>Form
- **action**: where would you save the data
  ```
  form action="index.html"
  ```

- **name**, **value**: parameter save to database
  ```
  <input type="text" name="email" value="" id="">
  ```

- **label.for** connects with **input.id**. when mouse click the lable then focus changes to input area
  ```
  <label for="mail">Email</label>
  <input type="text" name="email" placeholder="Enter email" id="mail">
  ```

- **form**
  ```
  <form action="index.html">
    <label for="mail">Email</label>
    <input type="text" name="email" placeholder="Enter email" id="mail">

    <label for="person">Person</label>
    <input type="text" name="person" placeholder="Enter your name" id="person">

    <h2>Gender</h2>
    <!-- if name sets the same one, it will be single option -->
    <input type="radio" name="gender" id="" value="male">Male
    <input type="radio" name="gender" id="" value="female">Female

    <h2>Hobby</h2>
    <input type="checkbox" name="Hobby" value="Reading" id="">Reading
    <input type="checkbox" name="Hobby" value="Film" id="">Film
    <input type="checkbox" name="Hobby" value="Cycling" id="">Cycling

    <br>

    <label for="birth">Birth</label>
    <select name="birth" id="birth">
      <option value="2005">2005</option>
      <option value="2006">2006</option>
    </select>

    <h2>Comment</h2>
    <textarea name="comment" id="" cols="30" rows="10"></textarea>

    <br>
    <input type="submit" value="Next Step">

    <!-- type=button used to set effect in Javascript -->
    <input class="type-btn" type="button" value="Click">
  </form>
  ```
##  7. <a name='Chapter8CSS3Tips'></a>Chapter 8 CSS3 Tips
- circle
  - set line-height as same as height that the words can be in the middle 
  ```
    .box {
      height: 150px;
      width: 150px;
      line-height: 150px;
      background: black;
      margin: 10px;
      /* border-radius: 50%; */
      border-radius: 50px 0 50px 0;
      border: 10px solid blue;
      text-align: center;
      color: white;
    }
  ```

- gradual(漸層) effect
  - [Check Broser Support](https://www.w3schools.com/css/css3_gradients.asp)
  - from top to bottom: `background: linear-gradient(#000,red);`
  - form left to right: `background-image: linear-gradient(to right, red , yellow);`
  ```
    .box2 {
      width: 1002px;
      height: 1002px;
      background: linear-gradient(#000,red);
    }
  ```

- box-shadow
  ```
    .box3 {
      height: 200px;
      width: 200px;
      background: green;
      /* x, y, blur ,color of shadow */
      box-shadow: 5px 5px 8px pink;
    }
  ```

##  8. <a name='Chapter9Likeamaster'></a>Chapter 9 Like a master

###  8.1. <a name='CSSPriority'></a>CSS Priority
- 維護專案時新css加在舊css後面, 新檔用`既有`class名稱去改內容
  > new css sheet add after old one
- 不要用#id設定css樣式, id適合用在`錨點`
  > don't use id to set the style, it uses on anchor
- !! 先看權重 > 在看先後, 樣式會像積木累加, 同類會後蓋前
  > same class will be covered by the last one
  - id: 100 point
  - class: 10 point
  - HTML Tag: 1 point (ex: span, h1, h2)
  - inline style: 1000 point (行內優先)
    > 常用在js做動畫,css不常用
  - !important: 10000 point
  - 優先序： inline 行內 > external / internal 外或內部 > browser

###  8.2. <a name='Howtoorganizethedesignlayoutwhenyougetitinthefirstplace'></a>How to organize the design layout when you get it in the first place
- print it out
  - arrange names of class
  - write the structure on paper
  - develop on program
- find the `fixed` section
  > 找出固定的地方
    - header
    - footer
    - side-bar
- `un-fixed` section means `content`
  > 不固定即是內容
- 規劃第一頁index是最費時, 需要客製化的地方多、收費也是最多的
- 並排: 以row為基礎關鍵字, 每個div內都要掛col
- 多排: 把container, row, col擺好, 想多排、併排都可以
```=html
<div class="container">
    <h2>First Chapter</h2>
    
    <div class="row">
        // Left 左邊
        <div class="col-md-6">
            <div class="col-md-3"></div>
            <div class="col-md-9"></div>
        </div>
        // Right 右邊
        <div class="col-md-6">
            <div class="col-md-3"></div>
            <div class="col-md-9"></div>
        </div>
    </div>    
</div>
```
###  8.3. <a name='DeatilsofHeader'></a>Deatils of Header
- metadata means data's info
```
<head>
  <meta charset="UTF-8">
  <title>HTML、CSS教學</title>

  <link rel="shortcut icon" href="favicon.ico">
  <meta name='description' content='網站描述文字' />

  <meta property="og:title" content="FB的標題" />
  <meta property="og:description" content="FB的描述">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="FB上的網址" />
  <meta property="og:image" content="FB的圖片" />

  <link href="圖片路徑" rel="apple-touch-icon" />

  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

  <link rel="stylesheet" href="CSS檔案路徑">
  <script type="text/javascript" src="JS檔案路徑"></script>
</head>
```

###  8.4. <a name='Tips-1'></a>Tips
- align center of container
```
 .wrap {
   margin: 0 auto;
   width: 500px;
 }
```
- 圖片設定用`display: block;`

##  9. <a name='Chapter10Multi-pages'></a>Chapter 10 Multi-pages
- 居中, 需設定寬值, auto表示左右平均分散
    ```=css
    .class {
        margin: 0 auto;
    }
    ```
- 寬高不寫死, 善用padding做留白效果
    ```=css
    .class{
        padding: 10px;
    }
    ```
- 最外層container不建議用%設定, 用下列方式設定
    ```=css
    .container {
        max-width: 10px;
    }
    ```
###  9.1. <a name='Maintaincssfiles'></a>Maintain css files
- create one css file and following the order by:
  1. css-rest
  2. common layout
  3. custom css for a specific page

- scss
  ```
  @import "variable";// 變數  
  @import "reset";  // reset.css  
  @import "layout"; // 共同框架,第一層
  @import "index";     
  @import "page1";     
  ```
- 總結
  1. 設計網頁,切圖
  2. 規劃layout
  3. css寫在一起by 順序

##  10. <a name='More'></a>More
- study how **pure css** design the structure of css
- [Can I Use](https://caniuse.com/): 
  check what css, javascript, and html do browser support
- [Statcounter](https://gs.statcounter.com/): trends of browser in the world

##  11. <a name='Javascript'></a>Javascript
###  11.1. <a name='DOM'></a>DOM
1. textContent
- only modify text
  ```
  const el = document.querySelector('.pic-img');
  el.textContent = "Hello World!!"
  ```
2. innerHTML
- Remove original content and replace to new html content
  ```
  const el = document.querySelector('.main');
  main.innerHTML = `<h2 class="header"><span>標題</span></h2>`
  ```
3. setAttribute
- setting html attribute to new value
  ```
  const yLink = document.querySelector('a');
  yLink.setAttribute("href","https://www.yahoo.com.tw");
  yLink.setAttribute("class","test");
  ```
4. querySelectorAll
- query all elements by a tag
```
const oLink = document.querySelectorAll('a');
console.log(oLink);
oLink[0].setAttribute("href","https://www.books.com.tw");
oLink[0].setAttribute("class","test");
oLink[0].textContent = "Buy Books";
```
5. getAttribute
- get value by attribute

```
<a href="http://www.books.com.tw" class="vLink"><span>博客來買書</span></a>

const vLink = document.querySelector("a");
console.log(vLink.getAttribute("href"));
console.log(vLink.getAttribute("class"));
console.log(vLink.innerHTML);
console.log(vLink.textContent);
```

6. get value
```
// get value
const txt = document.querySelector('.txt');
console.log(txt.value);
const sList = document.querySelector('.sList');
console.log(sList.value);

// set new value to txt
txt.value = "Hello!";
const sList = document.querySelector('.sList');
sList.value = "London";
```

###  11.2. <a name='Event'></a>Event
1. addEventListener
```
const title = document.querySelector("h3");
title.addEventListener("click", (e) => {
  title.textContent = `It's clicked`;
})
```
2. preventDefault
- cancel default event
```
const title = document.querySelector("h3");
title.addEventListener("click", (e) => {
  e.preventDefault();
})
```