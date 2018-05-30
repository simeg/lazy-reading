export const inputOnChange = input => ({
  type: "INPUT_ON_CHANGE",
  input
});

export const wpmOnChange = wpm => ({
  type: "WPM_ON_CHANGE",
  wpm
});

export const readerStart = {
  type: "READER_START"
};

export const readerStop = {
  type: "READER_STOP"
};

export const readerPause = {
  type: "READER_PAUSE"
};

export const readerIncWord = {
  type: "READER_INCREMENT_WORD"
};
