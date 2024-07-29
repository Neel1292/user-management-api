# User Management API 

## You can simply run this file and view the output in Postman because this is conneted with the Azure PostgresSQL Server.

### Step to follow:

Step 1: Clone this Repository

Step 2: ```npm install``` 

Step 3: On your Code Editor Terminal run this command 
    ```
    nodemon index.js
    ```

Step 4: Now Open Browser or Postman and type [localhost:8989/users](http://localhost:8989/users)  to get all user

## API's in this application

[/users](http://localhost:8989/users)  to get all user

[/create/user](http://localhost:8989/create/user)  to create user

[/update/:email](http://localhost:8989/update/:email)  to upate users password

[localhost:8989/delete/user](http://localhost:8989/delete/user)  to delete user

```Note: -> ":email" replace this by your email you have created```

 ```      -> Password are stored in enycrypted form so please store your email and password after creating user.```
