# 家庭記事本

一個簡單的記帳工具，讓使用者可以新增、修改與刪除「支出紀錄」，並查看過去的紀錄，以及各類別支出的圓餅圖。\
[前往網站](https://protected-river-87199.herokuapp.com/)

![alt text](https://user-images.githubusercontent.com/68381960/186365803-b8b8144a-245d-4c3b-84a9-10210d80860c.png)

## Features/功能

使用者可以：

- 在首頁一次瀏覽所有或篩選的支出清單
- 在首頁看到所有或篩選的支出清單總金額
- 在首頁看到所有或所選期間的支出類別比例圖
- 新增一筆支出
- 編輯支出 (一次只能編輯一筆)
- 刪除任何一筆支出 (一次只能刪除一筆)
- 在首頁可以根據支出「類別」和日期篩選支出

## Environment Setup/環境建置

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Mongoose](https://mongoosejs.com/)
- [Passport (passport-local/passport-facebook)](https://www.passportjs.org/docs/)
- [Bootswatch](https://bootswatch.com/)
- [Chart.js](https://www.chartjs.org/)
- [flatpickr](https://flatpickr.js.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon) -for development only

## Installation/專案安裝

### Clone

```
git clone https://github.com/Jennesy/expense-tracker
cd expense-tracker
npm install
```

### Run database server/啟動資料庫伺服器

在 localhost 建立 mongoDB 資料庫命名為 expense-tracker。

### Seed data/載入種子資料

一開始資料庫的「類別種類」以及「支出紀錄」是空的。\
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

可以至 http://localhost:3000 查看本地網站。

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
