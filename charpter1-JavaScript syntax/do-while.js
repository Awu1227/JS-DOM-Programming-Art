// 在某些场合，我们希望那些包含在循环语句内部的代码至少执行一次。这时，do循环是我们的最佳选择。
var count1 = 1;
var count2 = 1;
do {
  console.log(count1);
  count1++;
} while (count1 < 11);

do {
  console.log(count2);
  count2++;
} while (count2 < 1);
