-- Initialize database

-- CREATE DATABASE UL_Airlines;


-- Initialize tables
CREATE TABLE Pilot (

    pltID INT AUTO_INCREMENT PRIMARY KEY,
    plt_fname VARCHAR(100) NOT NULL,
    plt_lname VARCHAR(100) NOT NULL,
    license ENUM("Student", "Recreational", "Private", "Commercial", "Airline Transport") NOT NULL,
    plt_location VARCHAR(100) NOT NULL,
    consec_hrs_flown INT NOT NULL,
    CHECK (consec_hrs_flown >= 0)

);

CREATE TABLE PlaneModel (

    modelID INT AUTO_INCREMENT PRIMARY KEY,
    modelName VARCHAR(100) NOT NULL UNIQUE,
    reqCert ENUM("Student", "Recreational", "Private", "Commercial", "Airline Transport") NOT NULL,
    max_capacity INT NOT NULL,
    CHECK (max_capacity > 0)

);

CREATE TABLE Plane (

    planeID INT AUTO_INCREMENT PRIMARY KEY,
    modelID VARCHAR(100) NOT NULL,
    hrs_flown INT NOT NULL,
    FOREIGN KEY (modelID) REFERENCES PlaneModel(modelID)
        ON DELETE RESTRICT

);



CREATE TABLE Flight (

    flightID INT AUTO_INCREMENT PRIMARY KEY,
    scr VARCHAR(100) NOT NULL,
    dest VARCHAR(100) NOT NULL,
    planeID INT NOT NULL,
    pilot1_ID INT NOT NULL,
    pilot2_ID INT,

    FOREIGN KEY (planeID) REFERENCES Plane(planeID)
        ON DELETE RESTRICT
    ,
    FOREIGN KEY (pilot1_ID) REFERENCES Pilot(pilotID)
        ON DELETE RESTRICT
    ,
    FOREIGN KEY (pilot2_ID) REFERENCES Pilot(pilotID)
        ON DELETE SET NULL

);



CREATE TABLE Passenger (

    passID INT AUTO_INCREMENT PRIMARY KEY,
    pass_fname VARCHAR(100) NOT NULL,
    pass_lname VARCHAR(100) NOT NULL,

);

CREATE TABLE FlightSeat (
    
    flightID INT,
    seatID INT, 
    passID INT,
    PRIMARY KEY (flightID, seatID),

    FOREIGN KEY (flightID) REFERENCES Flight(flightID)
        ON DELETE CASCADE,
    FOREIGN KEY (passID) REFERENCES Passenger(passID)
        ON DELETE SET NULL

);








/*  OLD TABLES

CREATE TABLE Pilot (
    pilotID INT PRIMARY KEY,
    pilot_fname VARCHAR(100) NOT NULL,
    pilot_lname VARCHAR(100) NOT NULL,
    certs ENUM("Student", "Recreational", "Private", "Commercial", "Airline Transport") NOT NULL,
    pilot_location VARCHAR(100) NOT NULL,
    pilot_hrs_flown INT NOT NULL,
    CHECK (pilot_hrs_flown >= 0)

);

CREATE TABLE Plane (

    model VARCHAR(100) NOT NULL,
    reqCert ENUM("Student", "Recreational", "Private", "Commercial", "Airline Transport") NOT NULL,
    planeID INT PRIMARY KEY,
    plane_hrs_flown INT NOT NULL,
    max_capacity INT NOT NULL,
    CHECK (max_capacity > 0)

);


CREATE TABLE Flight (

    flightID INT PRIMARY KEY,
    scr VARCHAR(200) NOT NULL,
    dest VARCHAR(200) NOT NULL,
    planeID INT NOT NULL,
    pilot1ID INT NOT NULL,
    pilot2ID INT,

    FOREIGN KEY (planeID) REFERENCES Plane(planeID)
        ON DELETE RESTRICT
    ,
    FOREIGN KEY (pilot1ID) REFERENCES Pilot(pilotID)
        ON DELETE RESTRICT
    ,
    FOREIGN KEY (pilot2ID) REFERENCES Pilot(pilotID)
        ON DELETE SET NULL
    ,

    seatAval INT NOT NULL,
    CHECK (seatAval >= 0)


);



CREATE TABLE Passenger (

    passID INT PRIMARY KEY,
    pass_fname VARCHAR(100) NOT NULL,
    pass_lname VARCHAR(100) NOT NULL,
    flightID INT, 
    seat VARCHAR(5),

    FOREIGN KEY (flightID) REFERENCES Flight(flightID)
        ON DELETE SET NULL

);
*/

