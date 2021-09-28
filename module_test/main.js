// 메인 실행 파일
const nameModule = require("./modules/name");
const numberModule = require("./modules/number");
const stringModule = require("./modules/string");

const moduleArr = [1, 2, "apple", "ssac", 5];

nameModule("유승범");
numberModule(moduleArr);
stringModule(moduleArr);
