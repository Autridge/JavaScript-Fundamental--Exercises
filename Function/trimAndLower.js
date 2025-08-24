// trimAndLower – Remove leading/trailing spaces and lowercase a string.trimAndLower(" JS ") → "js"

function trimAndLower(str) {
  return str.trim().toLowerCase();
}

console.log(trimAndLower("   JS  "));
