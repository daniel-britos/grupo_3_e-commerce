const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  index: (req, res) => {
    let productsRecommended = db.Product.findAll({
      where: {
        discount: {
          [Op.gte]: 1,
        },
      },
      order: [["id", "ASC"]],
      limit: 12,
      include: ["images"],
    });
    Promise.all([productsRecommended])
      .then(([productsRecommended]) => {
        return res.render("index", {
          productsRecommended,
        });
      })
      .catch((error) => console.log(error));
  },
  courses: (req, res) => {
    return res.render("courses");
  },
  luthiers: (req, res) => {
    return res.render("luthiers");
  },
  terms: (req, res) => {
    return res.render("terms");
  },
};
