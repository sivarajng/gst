var pg = require('pg')
//var conString = 'postgres://postgres:postgres@localhost/fcs';
// var conString = 'postgres://pouochmwjyagce:a31f553c681047235ac5e3e826fe438a1b06b9d4a0f092c5e1301795cca8acb1@ec2-54-228-212-74.eu-west-1.compute.amazonaws.com:5432/d64irttd9v2ril' // make sure to match your own database's credentials
var rec;
var records = [
  { id: 1, username: 'fcs', password: 'fcs', displayName: 'Jack', emails: [{ value: 'jack@example.com' }] }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [{ value: 'jill@example.com' }] }
];

exports.findById = function (id, cb) {
  process.nextTick(function () {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function (username, cb) {
  process.nextTick(function () {

    //////////////
    var sql = "select * from fcs.users where username = '" + username + "'";
    pg.connect(pgConString, function (err, client, done) {
      if (err) {
        // pass the error to the express error handler
        console.log(err);
      }
      client.query(sql, [], function (err, result) {

        done()

        if (err) {
          // pass the error to the express error handler
          console.log(err);
        }

        console.log("___||||||___" + JSON.stringify(result.rows));
        //  res.json( result.rows);
        rec = result.rows;

        var record = rec[0];
        if (record != null && record.username === username) {
          return cb(null, record);
        }
        else {
          return cb(null, null);
        }

      })
    })

    //////



  });
}


