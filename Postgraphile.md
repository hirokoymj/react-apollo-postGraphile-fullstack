# Postgraphile

#### 12/25 - forum Example

- Set up [Forum Example](https://github.com/graphile/postgraphile/tree/master/examples/forum)
- Set up Forum Example data in default database.

```js
$ npm install -g postgraphile
$ psql -f schema.sql
$ psql -f data.sql
$ postgraphile --schema forum_example
```

#### 1/14

**Connect database "mydb"**

```
$ psql postgres:///mydb
```

**Connect database called "hirokoyamaji"**

```
$ psql postgres:///hirokoyamaji
```

**Help**

```js
mydb=# help
Type:  \copyright for distribution terms
       \h for help with SQL commands
       \? for help with psql commands
```

```
\dn[S+] [PATTERN]      list schemas
\l[+]   [PATTERN]      list databases
```

**List schmas**

```js
hirokoyamaji=# \dn
           List of schemas
         Name          |    Owner
-----------------------+--------------
 app_jobs              | hirokoyamaji
 forum_example         | hirokoyamaji
 forum_example_private | hirokoyamaji
 postgraphile_watch    | hirokoyamaji
 public                | postgres
(5 rows)
```

**List databases**

```js
mydb=# \l
                                     List of databases
     Name     |    Owner     | Encoding |   Collate   |    Ctype    |   Access privileges
--------------+--------------+----------+-------------+-------------+-----------------------
 hirokoyamaji | hirokoyamaji | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 mydb         | hirokoyamaji | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 postgres     | postgres     | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0    | postgres     | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
              |              |          |             |             | postgres=CTc/postgres
 template1    | postgres     | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
              |              |          |             |             | postgres=CTc/postgres
(5 rows)
```
