const baseUrl = "http://numbersapi.com";
const faveNum = 5;

// #1

async function faveNumFact() {
  let res = await axios.get(`${baseUrl}/${faveNum}`);
  console.log(res);
}

// #2

async function getThreeNumFacts() {
  let { data: fact1 } = await axios.get(`${baseUrl}/9`);
  console.log(fact1);

  let { data: fact2 } = await axios.get(`${baseUrl}/15`);
  console.log(fact2);

  let { data: fact3 } = await axios.get(`${baseUrl}/69`);
  console.log(fact3);
}

// #3

async function getFourFiveFacts(){
    let facts = await Promise.all([
        axios.get(`${baseUrl}/${faveNum}`),
        axios.get(`${baseUrl}/${faveNum}`),
        axios.get(`${baseUrl}/${faveNum}`),
        axios.get(`${baseUrl}/${faveNum}`)
    ])
   console.log(facts[0].data)
   console.log(facts[1].data)
   console.log(facts[2].data)
   console.log(facts[3].data)
}







