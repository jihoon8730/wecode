let result = [];

function test() {
  for (let i = 1; i < 51; i++) {
    if ((i + 1) % 2) {
      result.push(i)
    }
  }
  return result;
}
test()
