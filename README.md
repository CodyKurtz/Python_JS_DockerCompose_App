# Cat App

This is a sample application that uses nodeJS and python to run two different APIS.
C=
Instructions:

Update HTUSER and HTUSER variables to insert username and password into nginix container. 
Nginx will run on port 443 SSL using a self signed certificate.

APIs:

/cat (Node)
Get random cat photo.

/history (Python)

See cat history.

Tested with Docker for Mac version 17.12.0-ce-mac55 (23011).

How to Run:

docker-compose build .
docker-compose up

Example Usage:

curl -u user:password --insecure https://127.0.0.1/api/history
curl -u user:password --insecure https://127.0.0.1/api/cat
