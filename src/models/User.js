
const { response } = require('express');
const UserStorage = require('./UserStorage');

class User {
    constructor (body) {
        this.body = body;
    }
     
    async login() {
      const client = this.body;
      try {
      const user = await UserStorage.getUserInfo(client.id);

      if (user) {
        if (user.id === client.id && user.pw === client.pw) {
            return {success : true}; // id pw 같으면 성공
        }
        
        return {success :false, msg: '비밀번호가 틀렸습니다.'};  //pw 다르면
      }
      
      return {success:false,msg: '존재하지 않는 아이디 입니다.'};  // 둘다 다르면
    }catch(err) {
      return {success:false, msg: err};
    }
    }
  

    async register() {
      const client = this.body;
      try {
      const response = await UserStorage.save(client) //데이터 저장
      return response;
      } catch(err) {
        return {success :false, msg: err};
      }
    }


}
module.exports = User;


