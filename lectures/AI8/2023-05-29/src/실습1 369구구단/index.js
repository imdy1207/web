// 구구단 출력
for (let dan = 2; dan < 10; dan++) {
    for (let hang = 1; hang < 10; hang++) {
        let count = 0;

        document.write(`${dan} * ${hang} = `);

        for(let s of (dan*hang).toString()){
            if('369'.includes(s)) // s가 3, 6, 9에 포함되어 있으면
                count++;
        }

        if(count > 0)
            document.write(`${'👏'.repeat(count)}<br>`);
        else
            document.write(`${dan*hang}<br>`);
    }
    document.write("<br>");
}