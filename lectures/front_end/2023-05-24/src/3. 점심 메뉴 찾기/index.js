var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

document.write(foods.length, "<br>");

for (let i = 0; i < foods.length; i++)
  document.write(foods[i], "<br>");

for (let i = 0; i < foods.length; i+=2)
  document.write(foods[i], "<br>");

/*
for (let i = 0; i < foods.length; i++)
  if (i%2 == 0)
    document.write(foods[i], "<br>");
*/