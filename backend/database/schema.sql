Drop Database if exists NetFlex;

CREATE Database NetFlex;

USE NetFlex;

Create Table Movie(
    id int primary key auto_increment not null,
    url LONGTEXT,
    image varchar(255),
    title varchar(255),
    year varchar(255),
    duration varchar(255),
    rating varchar(255),
    quality varchar(255),
    genre varchar(255),
    description LONGTEXT,
    trailer LONGTEXT,
    link LONGTEXT
);

CREATE Table Subscription(
    id int not null auto_increment primary key,
    title VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    quality VARCHAR(255) NOT NULL,
    watch VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_deleted TINYINT Default 0
);

CREATE Table Role(
    id int not null auto_increment primary key,
    title VARCHAR(255) NOT NULL,
    is_deleted TINYINT Default 0
);

CREATE Table User(
    id int not null auto_increment primary key,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    plan int NOT NULL,
    role int NOT NULL,
    is_deleted TINYINT Default 0,
    FOREIGN KEY (plan) REFERENCES Subscription(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

Create Table Admin (
    id int not null auto_increment primary key,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role int NOT NULL,
    is_deleted TINYINT Default 0,
    FOREIGN KEY (role) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);