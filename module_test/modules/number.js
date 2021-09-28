const numberModule = (array) => {
    for (const item of array) {
        if (typeof item == "number") {
            if (item % 2 == 0) {
                console.log("짝수 입니다." + 2 ** item);
            } else {
                console.log("홀수 입니다.");
            }
        }
    }
};

module.exports = numberModule;
