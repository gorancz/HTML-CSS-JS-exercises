var form = document.getElementById("recipe-form");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            var recipeName = document.getElementById("recipe-name").value;
            var ingredientCount = document.getElementById("ingredient-count").value;

            if (recipeName && ingredientCount) {
                var ingredientForm = document.createElement("form");
                ingredientForm.id = "ingredient-form";

                var ingredientHeading = document.createElement("h2");
                ingredientHeading.textContent = "Enter the ingredients for " + recipeName;
                ingredientForm.appendChild(ingredientHeading);

                for (var i = 1; i <= ingredientCount; i++) {
                    var ingredientLabel = document.createElement("label");
                    ingredientLabel.textContent = "Ingredient " + i + ":";
                    ingredientLabel.htmlFor = "ingredient-" + i;
                    ingredientForm.appendChild(ingredientLabel);

                    var ingredientInput = document.createElement("input");
                    ingredientInput.type = "text";
                    ingredientInput.id = "ingredient-" + i;
                    ingredientInput.name = "ingredient-" + i;
                    ingredientInput.required = true;
                    ingredientForm.appendChild(ingredientInput);

                    ingredientForm.appendChild(document.createElement("br"));
                }

                var ingredientButton = document.createElement("button");
                ingredientButton.type = "submit";
                ingredientButton.textContent = "Generate recipe";
                ingredientForm.appendChild(ingredientButton);

                form.parentNode.replaceChild(ingredientForm, form);

                ingredientForm.addEventListener("submit", function(event) {
                    event.preventDefault();

                    var ingredients = [];
                    for (var i = 1; i <= ingredientCount; i++) {
                        var ingredient = document.getElementById("ingredient-" + i).value;
                        if (ingredient) {
                            ingredients.push(ingredient);
                        }
                    }

                    if (ingredients.length == ingredientCount) {
                        var recipe = document.createElement("div");
                        recipe.id = "recipe";

                        var recipeHeading = document.createElement("h1");
                        recipeHeading.textContent = recipeName;
                        recipe.appendChild(recipeHeading);

                        var ingredientList = document.createElement("ul");
                        for (var i = 0; i < ingredients.length; i++) {
                            var ingredientItem = document.createElement("li");
                            ingredientItem.textContent = ingredients[i];
                            ingredientList.appendChild(ingredientItem);
                        }
                        recipe.appendChild(ingredientList);

                        var ingredientTable = document.createElement("table");
                        ingredientTable.border = "1";
                        var ingredientRow = document.createElement("tr");
                        for (var i = 0; i < ingredients.length; i++) {
                            var ingredientCell = document.createElement("td");
                            ingredientCell.textContent = ingredients[i];
                            ingredientRow.appendChild(ingredientCell);
                        }
                        ingredientTable.appendChild(ingredientRow);
                        recipe.appendChild(ingredientTable);

                        ingredientForm.parentNode.replaceChild(recipe, ingredientForm);
                    } else {
                        alert("Please enter all the ingredients.");
                    }
                });
            } else {
                alert("Please enter the recipe name and the number of ingredients.");
            }
        });
