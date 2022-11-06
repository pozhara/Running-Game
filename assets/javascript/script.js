window.addEventListener('load', (event) =>{
    let answer={};
    let step=0;

    function showQuestion(){
        document.querySelector(".question").innerHTML=quiz[step]['q'];
        let answer="";
        for (let key in quiz[step]["a"]){
            answer+=`<li data-v="${key}" class="answer-variant">${quiz[step]["a"][key]}</li>`
        }
        document.querySelector(".answer").innerHTML=answer;
    }
    document.onclick=function(event){
        event.stopPropagation();
        if(event.target.classList.contains("answer-variant")&& step<quiz.length){
            event.target;
            if(result[event.target.dataset.v] != undefined){
                result[event.target.dataset.v]++;
            } else {
                result[event.target.dataset.v] = 0;
            }
            step++;
            if(step==quiz.length){
                document.querySelector(".question").remove();
                document.querySelector(".answer").remove();
                showResult();
            } else {
                showQuestion(step);
            }
        }
        showQuestion(step);
    }

    function showResult(){
        let key=Object.keys(result).reduce(function(a, b){
            return result[a] > result[b] ? a : b;
        })
        document.querySelector(".image").innerHTML=answers[key]["image"];
        document.querySelector(".endanswer").innerHTML=answers[key]["descriptions"];
    }
    showQuestion(step);
})