// #1

async function getCard() {
  let res = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
  );
  console.log(
    `Your card is a ${res.data.cards[0].value} of ${res.data.cards[0].suit}`
  );
}

// #2

async function getTwoCards() {
  let { data: card1 } = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
  );
  let { data: card2 } = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
  );
  console.log(
    `Your cards are a ${card1.cards[0].value} of ${card1.cards[0].suit} and a ${card2.cards[0].value} of ${card2.cards[0].suit}`
  );
}

// #3

let $drawButton = $("button");
let $cardDiv = $("#carddiv");
let baseURL = "https://deckofcardsapi.com/api/deck";
$drawButton.show();

async function setUp() {
  let deck = await axios.get(`${baseURL}/new/shuffle/`);
  $drawButton.click(async function () {
    let deckId = deck.data.deck_id;
    let cardData = await axios.get(`${baseURL}/${deckId}/draw/?count=1`);
    let cardSRC = cardData.data.cards[0].image;
    $cardDiv.append(`<img src=${cardSRC}></img>`);
    if (cardData.data.remaining == 0) {
      $drawButton.hide();
    }
  });
}

setUp();
