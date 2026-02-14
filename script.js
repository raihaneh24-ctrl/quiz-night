
const questions = [
    {question:"1: What is the capital of Spain?",options:["Barcelona","Madrid","Izmir","Buenos Aires"],correct:1},
    {question:"2: Which country has 3 capitals?",options:["Argentina","Portugal","South Africa","Somalia"],correct:2},
    {question:"3: The force responsible for keeping planets in orbit around the Sun is:",options:["Gravity","Nuclear force","Magnetism","Friction"],correct:0},
    {question:"4: The study of the universe as a whole is called:",options:["Geology","Astrology","Astronomy","Cosmology"],correct:3},
    {question:"5: The human eye can distinguish approximately how many colors?",options:["50","100","1 million","10 million"],correct:3},
    {question:"6: Most of the cells in and on the human body are:",options:["Brain cells","bacterial cells","muscle cells","skin cells"],correct:1},
    {question:"7: When were the Bamiyan Buddhas destroyed?",options:["2004","2001","2003","1999"],correct:1},
    {question:"8: Who won the Grammy’s award 2026 for Song of the Year?",options:["Lady Gaga","Kendrick Lamar","Billie Eilish","SZA"],correct:2},
    {question:"9: How old was Alexander the Great when he became king?",options:["23","17","20","18"],correct:2},
    {question:"10: Largest river by volume?",options:["Nile","Indus","Amazon","Danube"],correct:2},
    {question:"11: iPhone 17 Pro Max camera MP?",options:["12 MP","18 MP","48 MP","108 MP"],correct:2},
    {question:"12: Who painted the Mona Lisa?",options:["Michelangelo","Leonardo da Vinci","Van Gogh","Picasso"],correct:1},
    {question:"13: Most expensive painting sold?",options:["Mona Lisa","Salvator Mundi","Starry Night","The Scream"],correct:1},
    {question:"14: Afghan Nawroz food?",options:["Kabuli Pulao","Mantu","Haft Mewa","Sheer Khurma"],correct:2},
    {question:"15: When did WWII end?",options:["1939","1942","1945","1950"],correct:2},
    {question:"16: Largest hot desert?",options:["Thar","Sahara","Arabian","Gobi"],correct:1},
    {question:"17: Gemstone abundant in Kunar?",options:["Nephrite","Tourmaline","Sapphire","Diamond"],correct:1},
    {question:"18: H2SO4 formula for?",options:["Hydrochloric acid","Sulfuric acid","Nitric acid","Phosphoric acid"],correct:1},
    {question:"19: Most-followed on Instagram?",options:["Messi","Kylie","Ronaldo","Selena"],correct:2},
    {question:"20: How many hearts does an octopus have?",options:["1","2","3","4"],correct:2}
    ];
    
    let currentQuestion = 0;
    let score = 0;
    let answered = false;
    
    function loadQuestion(){
    answered = false;
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("score").innerText = "Score: " + score;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    q.options.forEach((option,index)=>{
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = option;
    
    div.onclick = ()=>{
    if(answered) return;
    
    if(index === q.correct){
    div.classList.add("correct");
    score++;
    }else{
    div.classList.add("wrong");
    }
    
    answered = true;
    
    // نمایش جواب درست
    optionsDiv.children[q.correct].classList.add("correct");
    };
    
    optionsDiv.appendChild(div);
    });
    }
    
    function nextQuestion(){
    if(currentQuestion < questions.length-1){
    currentQuestion++;
    loadQuestion();
    }else{
    localStorage.setItem("finalScore",score);
    window.location.href="result.html";
    }
    }
    
    function prevQuestion(){
    if(currentQuestion > 0){
    currentQuestion--;
    loadQuestion();
    }
    }
    
    if(document.getElementById("question")){
    loadQuestion();
    }