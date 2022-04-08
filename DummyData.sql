CREATE DATABASE userdb;
USE userdb;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ratings(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    user_id INT,
    rating INT check (rating between 0 and 10),
    review VARCHAR(255),
    author VARCHAR(255),
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES  users(id)
);

CREATE TABLE replies(
	id INT NOT NULL AUTO_INCREMENT,
    original_id INT,
    reply VARCHAR(255),
    user_id INT,
    author VARCHAR(255),
    PRIMARY KEY(id),
    FOREIGN KEY (original_id) REFERENCES ratings(id)
);

CREATE TABLE friends(
	user_id INT,
    friend_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friend_id) REFERENCES users(id)
);

INSERT INTO users (username, password,firstName,lastName) VALUES ('georgeC', 'password', 'George', 'Clooney');
INSERT INTO users (username, password,firstName,lastName) VALUES ('RadBrad', 'secret', 'Brad', 'Pitt');
INSERT INTO users (username, password,firstName,lastName) VALUES ('AngelJol', '1234', 'Angelina', 'Jolie');
INSERT INTO users (username, password,firstName,lastName) VALUES ('Batman123', 'darkknight', 'Christian', 'Bale');
INSERT INTO users (username, password,firstName,lastName) VALUES ('andyG', 'password', 'Andrew', 'Garfield');
INSERT INTO users (username, password,firstName,lastName) VALUES ('jHopkins', 'bully', 'Jimmy', 'Hopkins');
INSERT INTO users (username, password,firstName,lastName) VALUES ('richEvans', 'password', 'Rich', 'Evans');
INSERT INTO users (username, password,firstName,lastName) VALUES ('m.myers', 'secret', 'Mike', 'Myers');
INSERT INTO users (username, password,firstName,lastName) VALUES ('finnphayer', 'password', 'Finn', 'Phayer');
INSERT INTO users (username, password,firstName,lastName) VALUES ('teddieswize', 'password', 'Teddie', 'Swize');
INSERT INTO users (username, password,firstName,lastName) VALUES ('kirkmcbrayer', 'password', 'Kirk', 'McBrayer');
INSERT INTO users (username, password,firstName,lastName) VALUES ('rileybell', 'password', 'Riley', 'Bell');
INSERT INTO users (username, password,firstName,lastName) VALUES ('emilyvu', 'password', 'Emily', 'Vu');
INSERT INTO users (username, password,firstName,lastName) VALUES ('cameroncrochet', 'password', 'Cameron', 'Crochet');
INSERT INTO users (username, password,firstName,lastName) VALUES ('shellsbells', 'password', 'Shelly', 'Jones');
INSERT INTO users (username, password,firstName,lastName) VALUES ('allyj04', 'password', 'Ally', 'Johnson');
INSERT INTO users (username, password,firstName,lastName) VALUES ('joelMiller', 'password', 'Joel', 'Miller');
INSERT INTO users (username, password,firstName,lastName) VALUES ('chrisH98', 'password', 'Chris', 'Halls');
INSERT INTO users (username, password,firstName,lastName) VALUES ('samsters', 'password', 'Sammy', 'Flemington');
INSERT INTO users (username, password,firstName,lastName) VALUES ('JackA00', 'password', 'Jack', 'Adamo');
INSERT INTO users (username, password,firstName,lastName) VALUES ('A.poche', 'password', 'Adam', 'Poche');
INSERT INTO users (username, password,firstName,lastName) VALUES ('green.alex', 'password', 'Alex', 'Green');
INSERT INTO users (username, password,firstName,lastName) VALUES ('maddyCh', 'password', 'Madeline', 'Charles');
INSERT INTO users (username, password,firstName,lastName) VALUES ('franklyFrank', 'password', 'Frank', 'Lee');
INSERT INTO users (username, password,firstName,lastName) VALUES ('jasmineT', 'password', 'Jasmine', 'Tea');
INSERT INTO users (username, password,firstName,lastName) VALUES ('roseCollins', 'password', 'Rose', 'Collins');
INSERT INTO users (username, password,firstName,lastName) VALUES ('theDude', 'password', 'Jeff', 'Lebowski');
INSERT INTO users (username, password,firstName,lastName) VALUES ('waltPow', 'password', 'Walter', 'Powers');
INSERT INTO users (username, password,firstName,lastName) VALUES ('DonHenderson', 'password', 'Don', 'Henderson');
INSERT INTO users (username, password,firstName,lastName) VALUES ('charlie123', 'password', 'Charlie', 'Colgate');
INSERT INTO users (username, password,firstName,lastName) VALUES ('annaBanana', 'password', 'Anna', 'Sanders');
INSERT INTO users (username, password,firstName,lastName) VALUES ('Dr.Beth', 'password', 'Beth', 'Rota');


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'cheese';
flush privileges;

Select * from ratings;