function startCombat() {
  const selectedCategory = document.querySelector(
    'input[name="fighterCategory"]:checked'
  );
  const selectedDifficulty = document.getElementById("difficulty");

  if (selectedCategory && selectedDifficulty) {
    const character = selectedCategory.value;
    const difficulty = selectedDifficulty.value;
    window.location.href = `public/combat.html?character=${character}&difficulty=${difficulty}`;
  } else {
    alert("Veuillez sélectionner un combattant et un niveau de difficulté.");
  }
}