var scores = {
    "kor": 55,
    "mat": 75,
    "eng": 50
}

//풀이1
let c = "pass";
if (scores.kor <40 || scores.mat < 40 || scores.eng < 40)
    c = "fail";

if ((scores.kor+scores.mat+scores.eng)/3 < 60)
    c = "fail";

document.write(c);

//풀이2----------------------------------------------------------------------
function check_score(sc) {
    let total_score = 0
    let points = Object.values(sc)
    for (let i=0; i < points.length; i++) {
        total_score += points[i]
        if (points[i] < 40) {
            return "fail"
        }
    }

    if (total_score/3 < 60) {
        return "fail"
    }

    return "pass"
}

var check = check_score(scores);
document.write(check)