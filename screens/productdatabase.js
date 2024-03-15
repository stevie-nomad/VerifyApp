import * as SQLite from 'expo-sqlite';

const openDatabase = () => SQLite.openDatabase('productdatabase.db')

const initializeDatabase = () => {
 const db = openDatabase();
 
    db.transaction(
      (tx) => {
        tx.executeSql(
          'DROP TABLE IF EXISTS products;'
        );
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, barcode TEXT UNIQUE, manufacture TEXT, date INTEGER);',
          []
        );
      },
       (error) => {
        console.error('Transaction error:', error);
      },
      () => {
        console.log('Table created succesfully .');
      }
    );
  }

  initializeDatabase();
  

  const registerProduct = (name, barcode, manufacturer, date, callback) => {
   const db = openDatabase();
   
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO products (name, barcode, manufacture, date) VALUES (?, ?, ?, ?);',
        [name, barcode, manufacturer, date],
        (_, results) => {
  	  callback(results.productId);
        },
      );
    });
  };

  const getProducts = (callback) => {
    const db = openDatabase();
  
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM products;',[],(_, results) => {
         callback(results.rows._array);
         });
    });
  };
  
  export { registerProduct, getProducts };

