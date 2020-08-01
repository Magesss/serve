const { query } = require('./query')
let userModel = {
  INSERT_TABLE: (value) => {
    let sql = "insert into tb_users set user_id=?, username=?,password=?,avator=?,create_time=?,login_status=?,user_rule=?;"
    return query(sql, value)
  },
  QUERY_TABLE: (name) => {
    let sql = `select * from tb_users where username='${name}';`
    return query(sql)
  },
  UPDATA_TABLE: ({name, pwd, token}) => {
    let sql = `
      UPDATE tb_users 
      SET login_status='${token}'
      WHERE username='${name}' and password='${pwd}';
    `
    return query(sql)
  }
}
module.exports = {
  userModel
}
