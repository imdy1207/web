var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]
var foods_img = ["🍔", "🍝", "🍛", "🍗", "🥗", "🥘", "🍜", "🍕", "🍙", "🍣"]

//배열의 길이 출력
document.write("Foods Count : ");
document.write(foods.length, "<br>");

//모든 메뉴를 출력
document.write("<br>Menu<br>".bold().big().fontcolor("blue"));
for(let i=0; i < foods.length; i++)
    document.write(foods_img[i], foods[i], "<br>");

//점심 메뉴만 출력
document.write("<br>Lunch Menu<br>".bold().big().fontcolor("blue"));
for(let i=0; i < foods.length; i+=2)
    document.write(foods_img[i], foods[i], "<br>");