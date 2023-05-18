const cache = {};

function addOrGetCache(elementName, words) {
  const key = `${elementName}:${words.length}`;

  if (Object.keys(cache).indexOf(key) >= 0) {
    return cache[key];
  }

  const entry = {
    part: "",
    i: 0,
    offset: 0,
    forwards: true,
    skip_count: 0,
    skip_delay: 15,
  };

  cache[key] = entry;
  return entry;
}

function setText(elementName, words) {
  const len = words.length;

  const entry = addOrGetCache(elementName, words);

  if (entry.forwards) {
    if (entry.offset >= words[entry.i].length) {
      ++entry.skip_count;
      if (entry.skip_count === entry.skip_delay) {
        entry.forwards = false;
        entry.skip_count = 0;
      }
    }
  } else {
    if (entry.offset === 0) {
      entry.forwards = true;
      entry.i++;
      entry.offset = 0;
      if (entry.i >= len) {
        entry.i = 0;
      }
    }
  }
  entry.part = words[entry.i].substr(0, entry.offset);
  if (entry.skip_count === 0) {
    if (entry.forwards) {
      entry.offset++;
    } else {
      entry.offset--;
    }
  }

  const effectivePart = entry.part ? entry.part : "&nbsp;";

  document.getElementById(elementName).innerHTML = effectivePart;
}

function setAnimationInterval(elementName, words) {
  const speed = 70;
  return setInterval(() => {
    setText(elementName, words);
  }, speed);
}

export default setAnimationInterval;
