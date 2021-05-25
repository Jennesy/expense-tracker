# 家庭記事本
一個簡單的網路記帳工具，讓使用者可以新增、修改與刪除「支出紀錄」。
![alt text](https://raw.githubusercontent.com/Jennesy/expense-tracker/master/public/home_page_screenshot.jpg)
[網頁DEMO](https://protected-river-87199.herokuapp.com/)

## Features/功能
使用者可以：
* 在首頁一次瀏覽所有支出的清單
* 在首頁看到所有支出清單的總金額
* 新增一筆支出
* 編輯支出的所有屬性 (一次只能編輯一筆)
* 刪除任何一筆支出 (一次只能刪除一筆)
* 在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

## Environment Setup/環境建置
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Mongoose](https://mongoosejs.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon) -for development only

## Installation/專案安裝
### Clone
```
git clone https://github.com/Jennesy/expense-tracker
cd expense-tracker
npm install
```
### Run database server/啟動資料庫伺服器
在 localhost 建立mongoDB資料庫命名為 expense-tracker。
### Seed data/載入種子資料
一開始資料庫的「類別種類」以及「支出紀錄」是空的。
可執行以下指令載入預設的資料。
```
npm run seed
```

### Run/執行專案
```
npm run start
```
若成功開啟伺服器你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看網站。

### Develop mode/專案開發模式
開啟此模式時，當你修改程式並存檔完畢，無須重啟伺服器，可以重新整理 http://localhost:3000 即可查看編輯效果。
```
npm run dev
```
若成功你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看專案目前功能。