const insert = (model, data) => {
  model.create(data, (err, result) => {
    return result;
  });
};

const update = (model, data) => {
  model.findAndUpdate();
};

const remove = (model, id) => {
  model.findAndDelete();
};

const getById = (model, id) => {
  model.findById();
};

const getAll = (model) => {
  model.find({});
};

module.exports = { insert, update, remove, getById, getAll };
