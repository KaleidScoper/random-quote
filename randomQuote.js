fetch('/random-quote/quotes.txt')
    .then(response => response.text())
    .then(data => {
        // 将文件内容按行分割
        const lines = data.split('\n');
        // 随机选择一行
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        // 替换双空格为换行符
        const formattedLine = randomLine.replace(/  /g, '\n');
        // 查找页面上所有ID为randomText的元素，并更新其内容
        document.querySelectorAll('#randomText').forEach(element => {
            element.innerText = formattedLine;
        });
    })
    .catch(error => console.error('未能找到文本：', error));
