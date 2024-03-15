import * as SQLite from 'expo-sqlite';

const openDatabase = () => SQLite.openDatabase('database.db');

//LOGIN TABLE
// Function to initialize the database and create the 'users' table
const initializeDatabase = () => {
    const db = openDatabase();
  
    db.transaction(
      tx => {
        try {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, username TEXT UNIQUE, password TEXT);',
            []
          );
        } catch (error) {
          console.error('Error creating table:', error);
        }
      },
      (error) => {
        console.error('Transaction error:', error);
      },
      () => {
        console.log('Table creation transaction completed.');
      }
    );
  };
  

// Call the initializeDatabase function to ensure proper database setup
initializeDatabase();

// Function to insert a new user
const registerUser = (email, username, password, callback) => {
  const db = openDatabase();
  
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (email, username, password) VALUES (?, ?, ?);',
      [email, username, password],
      (_, results) => {
        callback(results.insertId);
      }
    );
  });
};

// Function to retrieve all users
const getAllUsers = (callback) => {
  const db = openDatabase();
  
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM users;', [], (_, results) => {
      callback(results.rows._array);
    });
  });
};

// Function to check login credentials
const checkLoginCredentials = (username, password, callback) => {
  const db = openDatabase();
  
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users WHERE username = ? AND password = ?;',
      [username, password],
      (_, results) => {
        const user = results.rows._array[0];
        callback(user); // Pass the user object to the callback
      },
      (_, error) => {
        console.error('Error checking login credentials:', error);
        callback(null); // Pass null in case of an error
      }
    );
  });
};

export { registerUser, getAllUsers, checkLoginCredentials };

