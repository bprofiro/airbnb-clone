'use strict'

const Model = use('Model')
const Database = use('Database')

class Property extends Model {
  static scopeNearBy (query, latitude, longitude, distance) {
    const haversine = `(6371 * ${latitude}
      * latitude
      * longitude
      - ${longitude}
      + ${latitude}
      * latitude)`

    return query
      .select('*', Database.raw(`round(${haversine}) as distance`))
      .whereRaw(`${haversine} < ${distance}`)
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  images () {
    return this.hasMany('App/Models/Image')
  }
}

module.exports = Property
