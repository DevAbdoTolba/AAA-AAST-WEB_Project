# 🔰installation

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of **Docker**. If not, please follow these guides to install Docker on [Windows](https://docs.docker.com/docker-for-windows/install/), [Mac](https://docs.docker.com/docker-for-mac/install/), or [Linux](https://docs.docker.com/engine/install/).
- You have installed the latest version of **Node.js**. If not, please follow these guides to install Node.js on [Windows](https://nodejs.org/en/download/package-manager/#windows), [Mac](https://nodejs.org/en/download/package-manager/#macos), or [Linux](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

<hr />

## 📀 Starting the Backend and Database

1. Open your terminal and navigate to your project directory. Or in vscode open the terminal by clicking <kbd>Ctrl</kbd> <kbd>j</kbd>  

2. Run the following command to start Docker:

```bash
    > docker-compose up
```

Wait for everything to start up. The backend should now be running on port 8700 and the database on port 3606.

<hr />

## 🛢️Database Admin

open a new terminal and run :

```bash
    > docker exec -it aaa-aast-web_project-back-mysql-1 mysql -p
```

You will be given something like :
```bash
    > docker exec -it aaa-aast-web_project-back-mysql-1 mysql -p
Enter password:
```

Enter the password given in the Docker Compose file. In our case, the default password is `root`.

```bash
mysql>
```

Now you have admin access to the database. Start by typing:

```sql
mysql> USE db
```

`db` is the default database name set by the first init. You can also use `SHOW TABLES` to check the tables in the database and interact with them.

<hr />

## 🖥️ Starting the Frontend

1. Open your terminal and navigate to your project directory.
2. Run the following command to install the dependencies:

```cmd
    > npm i
```

3. After the installation is complete, start the frontend by running:

```cmd
    > npm run dev
```
<br>
<center>
<strong>
<h2>
That's it! Happy coding!
</h2>
</strong>
</center>