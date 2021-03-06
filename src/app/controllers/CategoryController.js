const isValidUUID = require('../utils/isValidUUID');
const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoriesRepository.findAll();

    res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Category not found' });
    }

    const contact = await CategoriesRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(contact);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    res.status(201).json(category);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name,
    } = req.body;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Category not found' });
    }

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return res.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.update(id, {
      name,
    });

    res.status(201).json(category);
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Category not found' });
    }

    await CategoriesRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
