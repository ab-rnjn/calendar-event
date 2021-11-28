const config = require('../config');
const { getDB } = require('../Utility/mongoClient');
const Reply = require('../Utility/Reply');
const Mongo = require('mongodb');
const jwt = require('jsonwebtoken');

class EventService {

  static async fetchEvents(req, res) {
    const reply = new Reply();
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'Permission Denied' });
    }
    try {
      const token = req.get('authorization');
      jwt.verify(token, config.secretKey);
    } catch (err) {
      console.log(err);
      return res.status(403).json({ error: 'Permission Denied' });
    }
    const db = getDB();
    const userId = jwt.decode(req.get('authorization')).id;
    const month = req.params.month;
    const filterQuery = {
      $expr: {
        $eq: [{ $month: "start_time" }, month]
      }, 
      archived: false
    };
    const eventList = await db.collection('Events').find(filterQuery).toArray();
    reply.data = eventList;
    return res.send(JSON.stringify(reply));
  }

  static async updateEvents(req, res) {
    const reply = new Reply();
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'Permission Denied' });
    }
    try {
      const token = req.get('authorization');
      jwt.verify(token, config.secretKey);
    } catch (err) {
      console.log(err);
      return res.status(403).json({ error: 'Permission Denied' });
    }
    const db = getDB();
    const userId = jwt.decode(req.get('authorization')).id;
    const { name, start_time, end_time, _id, archived = false } = req.body;
    let dbData = {
      name, start_time, end_time, _id, archived, date_modified: new Date().toISOString()
    };
    if (_id) {
      dbData._id = new Mongo.ObjectID(_id)
    }
    const updateEvents = await db.collection('Events').save(dbData);
    reply.data = updateEvents["ops"][0];
    return res.send(JSON.stringify(reply));
  }

}
module.exports = EventService;