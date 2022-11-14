const inputValidation = {
  checkSixNum(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  },

  checkThousandNum(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.")
    }
  }
};

module.exports = inputValidation;