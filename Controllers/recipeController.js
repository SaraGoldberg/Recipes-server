class RecipeController {

  constructor () {}

  getAll = async (req, res) => {
    try {
      let recipesRes = await Recipe.find();
      res.send(recipesRes)
    } catch (err) {
      res.status(500).json(err => {
        err: err
      })
    }
  }
}
module.exports = new RecipeController();