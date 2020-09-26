'use strict'

const Property = use('App/Models/Property')

class PropertyController {
  async index ({ request }) {
    const { latitude, longitude } = request.all();

    const properties = Property.query()
      .nearby(latitude, longitude, 10)
      .fetch();

    return properties;
  }

  async show({ params }) {
    const property = await Property.findOrFail(params.id);

    await property.load('images');

    return property;
  }

  async store({ auth, request, response }) {
    const { id } = auth.user;

    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ]);

    const property = await Property.create({ ...data, user_id: id });

    return property;
  }

  async update({ params, request, response }) {
    const property = await Property.findOrFail(params.id);

    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ]);

    property.merge(data);

    await property.save();

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
