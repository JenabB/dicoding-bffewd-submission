const get_meal_btn = document.getElementById("get_meal");
const meal_container = document.getElementById("meal");

get_meal_btn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});

const createMeal = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  const newInnerHTML = `
    <style>
    .flex-container {
    display: flex;
    width: 83%;
    background-color: white;
    margin: 30px auto;
    padding: 10px 20px 10px 5px;
    box-sizing: border-box;
    box-shadow: 0 6px 10px 2px rgba(0, 0, 0, 0.2);
    flex-wrap: wrap;
    align-items: center;
    border-radius: 10px;
    z-index: 1;
  }
  
  .flexcard {
    justify-content: center;
    overflow: hidden;
    width: 50%;
    margin-top: 20px;
    margin-left: 40px;
    border-radius: 10px;

  }
  
  .item-1 {
    margin-left: 10px;
  }

  .item-2 {
    width: 40%;
    height: 400px;
    margin-left: 10px;
  }

  .item-3 {
      width: 100%;
  }

    img {
        width: 500px;
        height: 400px;
        object-align: center;
    }
    .instruction{
      color: white;
        background-color: orange;
        text-align: justify;
        font-size: 10pt;
        padding: 30px 30px 30px 30px;
        z-index: 2;
        top: 0;
    }

    h4 {
        padding: 0;
    }
    @media (max-width: 768px) {
      .flexcard {
        width: 90%;
      }
      .item-2 {
        height: 200px;
        margin-left: 10px;
      }
    }
    @media (max-width: 500px) {
      .flex-container {
        width: 100%;
      }
      .flexcard {
        width: 100%;
        margin-top: 0px;
        margin-left: 0px;
      }
      .item-2 {
        height: 200px;
        margin-left: 10px;
      }
    }
    </style>
    <div class="flex-container">
        <div class="flexcard item-1">
            <div class="container-image">
                <img src="${meal.strMealThumb}" alt="Meal Image">
            </div>
        </div>
        <div class="flexcard item-2">
                ${
                  meal.strMeal
                    ? `<p><strong>Name:</strong> ${meal.strMeal}</p>`
                    : ""
                }
                ${
                  meal.strCategory
                    ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
                    : ""
                }
                ${
                  meal.strArea
                    ? `<p><strong>Area:</strong> ${meal.strArea}</p>`
                    : ""
                }
                ${
                  meal.strTags
                    ? `<p><strong>Tags:</strong> ${meal.strTags
                        .split(",")
                        .join(", ")}</p>`
                    : ""
                }
                </div>
        <div class="flexcard item-3">
                <h5>Ingredients:</h5>
                <ul>
                    ${ingredients
                      .map(
                        (ingredient) => `
                    <li>${ingredient}</li>
                    `
                      )
                      .join("")}
                </ul>
                </div>
            </div>
            <div class="flex-container instruction">
                <h4>Instruction</h4>
                <p>${meal.strInstructions}</p>
            </div>
    `;

  meal_container.innerHTML = newInnerHTML;
};