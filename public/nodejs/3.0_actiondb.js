/**
 * @author detanx <detanxit@163.com>
 * @version 0.0.1 2018-9-19 11:14am
 */

module.exports = {
	/**
   * insertData mongodb插入数据函数
   * @param {Object} db - db实例.
   * @param {String} tableName - 表名.
   * @param {Object} insertData - 插入的数据.
   * @param {Function} callback - 回调函数.
   */
	insertData : function(db, tableName, insertData, callback) {  
	    //连接到表 dynamic
	    var collection = db.collection(tableName);
	    
	    collection.insert(insertData, function(err, result) { 
        if(err)
        {
          console.log('Error:'+ err);
          return;
        }     
        callback(result);
	    });
	},
	/**
   * selectData mongodb查询数据函数
   * @param {Object} db - db实例.
   * @param {String} tableName - 表名.
   * @param {Object} whereStr - 查询条件.
   * @param {Function} callback - 回调函数.
   */
	selectData : function(db, tableName, whereStr, callback) {  
    //连接到表  
    var collection = db.collection(tableName);
    collection.find(whereStr).toArray(function(err, result) {
	    if(err)
	    {
	      console.log('Error:'+ err);
	      return;
	    }     
	    callback(result);
	  });
	},
	/**
   * updateData mongodb更新数据函数
   * @param {Object} db - db实例.
   * @param {String} tableName - 表名.
   * @param {Object} whereStr - 查询条件.
   * @param {Object} updateStr - 更新的数据.
   * @param {Function} callback - 回调函数.
   */
	updateData : function(db, tableName, whereStr, updateStr, callback) {  
    //连接到表  
    var collection = db.collection(tableName);
    
    collection.update(whereStr,updateStr, function(err, result) {
      if(err)
      {
        console.log('Error:'+ err);
        return;
      }     
      callback(result);
    });
  },
  /**
   * delData mongodb删除数据函数
   * @param {Object} db - db实例.
   * @param {String} tableName - 表名.
   * @param {Object} whereStr - 查询条件.
   * @param {Function} callback - 回调函数.
   */
  delData : function(db, tableName, whereStr, callback) {  
	  //连接到表  
	  var collection = db.collection(tableName);
	  collection.remove(whereStr, function(err, result) {
	    if(err)
	    {
	      console.log('Error:'+ err);
	      return;
	    }     
	    callback(result);
	  });
	}
}