const sleep = t =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(`done sleeping for ${t}`), t)
  );

module.exports = sleep;
