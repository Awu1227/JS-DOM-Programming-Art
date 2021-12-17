// 声明数组
var beatles = Array("John", "Paul", "George", "Ringo");
console.log(beatles);

var names = ["Ringo", "John", "George", "Paul"];
beatles[1] = names[3];

// 数组可以包含其他数组
var lennon = ["John", 1940, false];
var beatles = [];
beatles[0] = lennon;
console.log(beatles[0][1]);

// 关联数组
var lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;
