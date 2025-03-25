INSERT INTO Pilot (plt_fname, plt_lname, license, plt_location, consec_hrs_flown)
VALUES ("Ben", "Tenneson", "Student", "Lafayette", 6);

INSERT INTO Pilot (plt_fname, plt_lname, license, plt_location, consec_hrs_flown)
VALUES ("Gwen", "Tenneson", "Commercial", "Lafayette", 10);

INSERT INTO Pilot (plt_fname, plt_lname, license, plt_location, consec_hrs_flown)
VALUES ("Kevin", "Levin", "Private", "Atlanta", 12);

INSERT INTO Pilot (plt_fname, plt_lname, license, plt_location, consec_hrs_flown)
VALUES ("Max", "Tenneson", "Airline Transport", "New York", 18);



INSERT INTO PlaneModel(modelName, reqCert, max_capacity)
VALUES ("Rust Bucket 687", "Recreational", 10);

INSERT INTO PlaneModel(modelName, reqCert, max_capacity)
VALUES ("Model 10A", "Commercial", 100);

INSERT INTO PlaneModel(modelName, reqCert, max_capacity)
VALUES ("Model 20B", "Commercial", 250);


INSERT INTO Plane(modelID, hrs_flown)
VALUES (1, 90);

INSERT INTO Plane(modelID, hrs_flown)
VALUES (1, 17);

INSERT INTO Plane(modelID, hrs_flown)
VALUES (2, 40);

INSERT INTO Plane(modelID, hrs_flown)
VALUES (3, 400);




INSERT INTO Flight(scr, dest, planeID, plt1_ID, plt2_ID)
VALUES ("Lafayette", "Atlanta", 1, 2,  3);

INSERT INTO Flight(scr, dest, planeID, plt1_ID, plt2_ID)
VALUES ("Houston", "New York", 3, 3,  NULL);





INSERT INTO Passenger (pass_fname, pass_lname)
VALUES ("Bob", "Esponja");

INSERT INTO Passenger (pass_fname, pass_lname)
VALUES ("Vin", "Mists");

INSERT INTO Passenger (pass_fname, pass_lname)
VALUES ("Elizabeth", "Bennet");


INSERT INTO FlightSeat (flightID, seatID, passID)
VALUES (1, 1, 1);


/*  OLD TEST DATA
INSERT INTO Pilot (pilotID, pilot_fname, pilot_lname, certs, pilot_location, pilot_hrs_flown)
VALUES (1, "Finn", "the Human", "Student", "Ooo", "120");

INSERT INTO Pilot (pilotID, pilot_fname, pilot_lname, certs, pilot_location, pilot_hrs_flown)
VALUES (2, "Jake", "the Dog", "Airline Transport", "Ooo", "1200");

INSERT INTO Pilot (pilotID, pilot_fname, pilot_lname, certs, pilot_location, pilot_hrs_flown)
VALUES (3, "Marceline", "the Vampire Queen", "Airline Transport", "Ooo", "120000");

INSERT INTO Pilot (pilotID, pilot_fname, pilot_lname, certs, pilot_location, pilot_hrs_flown)
VALUES (4, "Simon", "Petrikov", "Private", "Ice Kingdom", "15000");

INSERT INTO Pilot (pilotID, pilot_fname, pilot_lname, certs, pilot_location, pilot_hrs_flown)
VALUES (5, "Gunter", "why did you eat my fries", "Commercial", "Ice Kingdom", "19000");




INSERT INTO Plane (model, reqCert, planeID, plane_hrs_flown, max_capacity)
VALUES ("Morrow", "Student", 1, 300, 4);

INSERT INTO Plane (model, reqCert, planeID, plane_hrs_flown, max_capacity)
VALUES ("PB's Banana Guard Plane", "Airline Transport", 2, 1300, 4000);

INSERT INTO Plane (model, reqCert, planeID, plane_hrs_flown, max_capacity)
VALUES ("Marceline's Vamp Form", "Recreational", 3, 13000, 2);

INSERT INTO Plane (model, reqCert, planeID, plane_hrs_flown, max_capacity)
VALUES ("Cloud", "Private", 4, 200, 40);
*/

/*
INSERT INTO Plane (model, reqCert, planeID, plane_hrs_flown, max_capacity)
VALUES ("Banana Man's Rocket", "Airline Transport", 5, 100, 10);

INSERT INTO Flight (flightID, scr, dest, planeID, pilot1ID, pilot2ID, seatAval)
VALUES (1, "Ooo", "Space Jail", 5, 5,  NULL , 2);

INSERT INTO Flight (flightID, scr, dest, planeID, pilot1ID, pilot2ID, seatAval)
VALUES (2, "Ice Kingdom", "Candy Kingdom", 1, 4,  NULL , 200);



INSERT INTO Passenger (passID, pass_fname, pass_lname, flightID, seat)
VALUES (1, "Peppermint", "Butler", NULL, NULL);

INSERT INTO Passenger (passID, pass_fname, pass_lname, flightID, seat)
VALUES (2, "Wizard", "King", NULL, NULL);

INSERT INTO Passenger (passID, pass_fname, pass_lname, flightID, seat)
VALUES (3, "The", "Lich", NULL, NULL);
*/

