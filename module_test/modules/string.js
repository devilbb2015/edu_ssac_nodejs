const stringModule = (array) => {
    for (const item of array) {
        if (typeof item == "string") {
            const itemArr = item.split("");
            const uniqueArr = itemArr.filter((e, i) => {
                return itemArr.indexOf(e) === i;
            });
            console.log(uniqueArr.join(""));
        }
    }
};

module.exports = stringModule;
