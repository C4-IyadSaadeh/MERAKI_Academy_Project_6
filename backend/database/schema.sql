Drop Database if exists NetFlex;

CREATE Database NetFlex;

USE NetFlex;

CREATE Table Genre(
    id int not null auto_increment primary key,
    title VARCHAR(255) NOT NULL,
    is_deleted TINYINT Default 0
);

Create Table Movie(
    id int not null auto_increment primary key,
    title VARCHAR(255) NOT NULL,
    duration decimal NOT NULL,
    rate int NOT NULL,
    country VARCHAR(255) NOT NULL,
    quality VARCHAR(255) NOT NULL,
    posterImg VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    years VARCHAR(255) NOT NULL,
    cast VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    trailer VARCHAR(255) NOT NULL,
    genre int NOT NULL,
    is_deleted TINYINT Default 0,
    FOREIGN KEY (genre) REFERENCES Genre(id) ON DELETE CASCADE ON UPDATE CASCADE
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