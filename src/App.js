const Lotto = require("./Lotto");
const Console = require("@woowacourse/mission-utils").Console;
const Random = require("@woowacourse/mission-utils").Random;
const inputValidation = require("./inputValidation");
const { INPUTS, OUTPUTS } = require("./constants");

class App {
  #countLottos;
  #lottosList = []; //8개 [[1,2,1,2,2],[],...]
  #inputWinningLottoNums;
  #inputBonusNum;
  #scoreList = [];

  play() {
    this.inputStartWithMoney();
    // this.makeLottosList();
    // this.inputNumbers();
    // Console.close();
  }

  inputStartWithMoney() {
    Console.readLine(INPUTS.INPUT_MONEY, (money) => {
      if (inputValidation.checkThousandNum(money)) {
        this.#countLottos = Number(money) / 1000;
        this.printCountLottos();
        this.makeLottosList();
        this.inputWinningNumbers();
        this.inputBonusNumber();
      }
    });
  }

  printCountLottos() {
    Console.print(`\n${this.#countLottos}개를 구매했습니다.`);
  }

  //로또 뽑기 logic
  pickRandomLottoNumber() {
    const pickedLottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    return pickedLottoNum;
  }

  makeLottosList() {
    let lottosList = [];
    for (let lottos = 0; lottos < this.#countLottos; lottos++) {
      const pickRandomLottoNumber = this.pickRandomLottoNumber().sort();
      const validateLottoNumber = new Lotto(pickRandomLottoNumber);
      lottosList.push(validateLottoNumber.inputLottoNumbers);
      Console.print(pickRandomLottoNumber); //
      // Console.print(lottosList);
    }
    this.#lottosList = lottosList;
    return this.#lottosList;
  }

  //당첨번호 입력받기 -> Lotto에 넣어서 validation 검증 받기
  inputWinningNumbers() {
    Console.readLine(INPUTS.INPUT_NUMBERS, (winningNumbers) => {
      const inputWinningNumArr = winningNumbers
        .split(",")
        .map((value) => Number(value));
      const validateWinningLottoNumber = new Lotto(inputWinningNumArr);
      this.#inputWinningLottoNums =
        validateWinningLottoNumber.inputLottoNumbers;
      Console.print(this.#inputWinningLottoNums); //
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUTS.INPUT_BONUS, (bonus) => {
      if (this.#inputWinningLottoNums.includes(Number(bonus))) {
        throw new Error(
          "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
        );
      }
      
    });
  }

  //등수 logic -> 8개의 로또를 돌면서 체크
  winLottoScore() {
    for (let index = 0; index < this.#lottosList.length; index++) {}
  }

  //lottos는 array, numbers
  countMatchingLotto(lottos, numbers) {}
}

const startLotto = new App();
startLotto.play();

module.exports = App;

//   randomBonusNumber() {
//     // const bonusNum = Random.
//   }
