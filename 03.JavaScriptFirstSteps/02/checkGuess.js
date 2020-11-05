function checkGuess () {
  let userGuess = Number(guessField.value);//Number()校验是否数字, userGuess:用户输入的值
  if (guessCount === 1) {//是不是第一次猜数字
    guesses.textContent = '上次猜的数: ';
  }
  guesses.textContent += userGuess + ' '; //将所有猜的数保存为字符

  if (userGuess === randomNumber) {//游戏胜利,庆祝,清除高了/低了信息框(调用setGameOver())
    lastResult.textContent = '恭喜你!猜对了';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10)  {//是否最后一个回合
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = '你猜错了!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = '你猜低了!';
    } else if (userGuess > randomNumber)  {
      lowOrHi.textContent = '你猜高了';
    }
  }

  guessCount++;//为下次猜测值做准备
  guessField.value = '';//清空输入
  guessField.focus();//聚焦
}