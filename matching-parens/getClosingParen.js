function getClosingParen(str, index) {
  let open = 0,
      close = 0;

  for (let i = index; i < str.length; i++) {
    let char = str[i];

    if (char == '(') {
      open++;
    } else if (char == ')') {
	    close++;
      if (open == close) {
        return i;
      }
    }
  }

  throw new Error('No closing parenthesis :(');
}

getClosingParen('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10)

// time O(n)
// space O(1)
