let count = 0;

function getCount() {
  return count;
}

function resetCount() {
  count = 0;
}

function incrementSync() {
  const currentTime = Date.now();

  while (true) {
    const now = Date.now();
    if (now - currentTime > 3000) break;
  }

  count++;
}

function incrementAsync(callback) {
  setTimeout(() =>{
    count++
    callback();
  }, 3000);
}

module.exports = { getCount, resetCount, incrementSync, incrementAsync };
