-- Initialize database

-- CREATE DATABASE UL_Airlines;


-- Initialize tables

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

