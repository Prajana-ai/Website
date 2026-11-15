const alphabet = Object.freeze({
  "A": ["Alfa", "AL-FAH"],
  "B": ["Bravo", "BRAH-VOH"],
  "C": ["Charlie", "CHAR-LEE"],
  "D": ["Delta", "DELL-TAH"],
  "E": ["Echo", "ECK-OH"],
  "F": ["Foxtrot", "FOKS-TROT"],
  "G": ["Golf", "GOLF"],
  "H": ["Hotel", "HOH-TELL"],
  "I": ["India", "IN-DEE-AH"],
  "J": ["Juliett", "JEW-LEE-ETT"],
  "K": ["Kilo", "KEY-LOH"],
  "L": ["Lima", "LEE-MAH"],
  "M": ["Mike", "MIKE"],
  "N": ["November", "NO-VEM-BER"],
  "O": ["Oscar", "OSS-CAH"],
  "P": ["Papa", "PAH-PAH"],
  "Q": ["Quebec", "KEH-BECK"],
  "R": ["Romeo", "ROW-ME-OH"],
  "S": ["Sierra", "SEE-AIR-RAH"],
  "T": ["Tango", "TANG-GO"],
  "U": ["Uniform", "YOU-NEE-FORM"],
  "V": ["Victor", "VIK-TAH"],
  "W": ["Whiskey", "WISS-KEY"],
  "X": ["X-ray", "ECKS-RAY"],
  "Y": ["Yankee", "YANG-KEY"],
  "Z": ["Zulu", "ZOO-LOO"],
  "0": ["Zero", "ZEE-RO"],
  "1": ["One", "WUN"],
  "2": ["Two", "TOO"],
  "3": ["Three", "TREE"],
  "4": ["Four", "FOW-ER"],
  "5": ["Five", "FIFE"],
  "6": ["Six", "SIX"],
  "7": ["Seven", "SEV-EN"],
  "8": ["Eight", "AIT"],
  "9": ["Nine", "NINER"]
});

export function sanitize(input) {
  return String(input).replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
}

export function translate(input) {
  return Array.from(sanitize(input), (letter, position) => ({position, letter, word: alphabet[letter][0], pronunciation: alphabet[letter][1]}));
}

// Embeds must preserve the exact reference, rather than filtering prose into one.
export function validateReferenceCode(input) {
  if (typeof input !== 'string') throw new TypeError('Provide a reference code.');
  const code = input.trim();
  if (!/^[a-zA-Z0-9]{1,128}$/.test(code)) {
    throw new RangeError('Use 1–128 letters and numbers, without spaces or punctuation.');
  }
  return code.toUpperCase();
}
