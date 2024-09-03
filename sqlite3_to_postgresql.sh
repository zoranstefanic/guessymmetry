#!/bin/bash 
# Transfer data from sqlite3 to postgresql database on the server
# https://hevodata.com/learn/sqlite-to-postgresql/

# First dump the sqlite3 database
./manage.py dumpdata > db.sqlite3.json

# hlK6YF7891dlrHs to connect to the postgresql server
psql -U zoran guessymmetry

# Delete old migrations and create new ones
find . -path '*/migrations/*.py' -not -name '__init__.py' -delete
find . -path '*/migrations/*.pyc' -delete
python manage.py makemigrations
python manage.py migrate

pip install psycopg2
pip install --upgrade pip

# Finally load the data that was dumped
./manage.py loaddata db.sqlite3.json 

#This worked on 3.9.2024. so the database was changed to PostgreSQL 
