//Selected-player
const playerArray = [];
function SelectButton(element) {
  if (playerArray.length > 4) {
    alert("you can't not select any player");
  } else {
    const mainPlyerName = element.parentNode.parentNode.children[0].innerText;
    playerArray.push(mainPlyerName);
    document.getElementById("totalPlyerList").innerText = playerArray.length;
    const makeLi = document.createElement("li");
    const mainUlID = document.getElementById("mainUl");
    makeLi.innerText = mainPlyerName;
    makeLi.setAttribute(
      "class",
      "block text-2xl text-white pl-3 border-b-2 border-indigo-500 mb-2 w-6/12 m-auto text-center"
    );
    mainUlID.appendChild(makeLi);
    if (true) {
      element.setAttribute("disabled", true);
      element.setAttribute(
        "class",
        "bg-slate-500 w-6/12 text-white py-2 mt-5 font-bold rounded transition duration-300 ease-in "
      );
    }
  }
}
//Selected-player end

//Budget Area start
function comunBudget(element) {
  const mainId = document.getElementById(element);
  const mianInt = parseInt(mainId.value);
  mainId.value = "";
  return mianInt;
}
document.getElementById("seletedPlayer").addEventListener("click", function () {
  const perPlayer = document.getElementById("perPlayer");
  const perPlayerInt = parseInt(perPlayer.value);
  const playerExpenses = document.getElementById("playerExpenses");

  //number type valation
  if (isNaN(perPlayerInt)) {
    alert("please Give me amount");
  } else {
    playerExpenses.innerText = perPlayerInt * playerArray.length;
    perPlayer.value = "";
  }
});
document.getElementById("allTotal").addEventListener("click", function () {
  //player Expenses

  // all define area
  const totalExpenses = document.getElementById("totalExpenses");
  const managerValue = document.getElementById("manager");
  const managerInt = parseInt(managerValue.value);
  const coachValue = document.getElementById("coach");
  const coachInt = parseInt(coachValue.value);
  const playerExpenses = document.getElementById("playerExpenses");
  const perPlayerExpensesInt = parseInt(playerExpenses.innerText);
  // all define area end

  if (perPlayerExpensesInt === 0) {
    alert("Please give me player Epenses Amount");
  } else {
    //Manager Money
    const manager = comunBudget("manager");
    //coach Money
    const coach = comunBudget("coach");

    //   all Total Expenses
    if (isNaN(managerInt) || isNaN(coachInt)) {
      alert("please Give me amount");
    } else {
      totalExpenses.innerText = perPlayerExpensesInt + manager + coach;
    }
  }
});
//Budget Area end
