function areYouPlayingBanjo(name) {
  // Converts name to lowercase
  let nameLower = name.toLowerCase();
  
  // Takes first letter of name inputted
  let firstChar = nameLower.charAt(0);
  
  // Checks if name plays banjo
  if (firstChar === 'r') {
    return `${name}` + " plays banjo";
  } else {
    return `${name}` + " does not play banjo";
  }
}
