'use strict'

const Property = use('App/Models/Property')

class PropertyController {
  async index () {
    const properties = Property.all();

    return properties;
  }

  async show({ params }) {
    const property = await Property.findOrFail(params.id);

    await property.load('images');

    return property;
  }

  async destroy ({ params, auth, response }) {
    const property = await Property.findOrFail(params.id);

    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized!'});
    }

    await property.delete();
  }
}

module.exports = PropertyController
