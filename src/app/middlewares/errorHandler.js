module.exports = (error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
};
