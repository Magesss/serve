const { query } = require('./query')
let userModel = {
  INSERT_TABLE: ({username, password, createTime}) => {
    console.log(username, password, createTime)
    let sql = `insert into tb_users set username='${username}',password='${password}',create_time=${createTime}`
    return query(sql)
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
  },
}
module.exports = {
  userModel
}
