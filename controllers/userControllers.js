exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      User: "<Getiing The All User...>",
    },
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      User: `<Getiing The User ${req.params.id}`,
    },
  });
};

exports.createUser = (req, res) => {
  res.status(201).json({
    status: "Success",
    data: {
      User: "<Created The User...>",
    },
  });
};

exports.updateUser = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      User: "<Upadted The User...>",
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      User: "<Deleted The User...>",
    },
  });
};
