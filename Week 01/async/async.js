
const light = () => {
  setTimeout(() => {
    yellow()
  }, 6 * 1000);
};

function yellow() {
  setTimeout(() => {
    red()
  }, 2 * 1000);
}

function red() {
  setTimeout(() => {
    light();
  }, 6 * 1000);
}
light();