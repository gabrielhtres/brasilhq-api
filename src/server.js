const porta = 3001;

const server = (app) => {
  app.listen(porta || 3001, () => {
    console.log(`Server is running on port ${porta}`);
  });
};

module.exports = server;
