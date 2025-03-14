-- a: List pilots at source with certification and low enough consecutive hours
SELECT pilotID
FROM pilot
WHERE certs='Commercial'
AND pilot_hrs_flown<100;

-- b: List flights from source to destination with available seats
SELECT planeID
FROM flight
WHERE scr='Lafayette'
AND dest='Hong Kong'
AND seatAval>0;

-- c: List available seats for flight
SELECT seatAval
FROM flight
WHERE planeID=0;

-- d: Create ticket that includes flight and passenger information
SELECT pass_fname, pass_lname, seat, scr, dest
FROM passenger
INNER JOIN flight
ON passenger.flightID=flight.flightID
WHERE passID=0;

-- e: Sort flights by seats available
SELECT flightID
FROM flight
ORDER BY seatAval;

-- f: Create and update passenger and pilot information (not a query)

-- g: List planes overdue on maintenance based on hours flown
SELECT planeID
FROM plane
WHERE plane_hrs_flown>100;
