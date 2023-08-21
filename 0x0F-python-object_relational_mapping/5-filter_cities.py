#!/usr/bin/python3
"""Defines a MySQLdb database connection """

import MySQLdb

from sys import argv

if __name__ == '__main__':

    """Establish db connection"""
    connection = MySQLdb.connect(
        host='localhost',
        user=argv[1],
        port=3306,
        password=argv[2],
        database=argv[3]
    )

    """create a cursor object"""
    my_cursor = connection.cursor()

    """Execute an sql query"""
    my_cursor.execute(
        """SELECT * FROM cities
        INNER JOIN states
        ON cities.state_id = states.id
        ORDER BY cities.id""")

    """Fetch results"""
   # my_data = my_cursor.fetchall()

    """print results"""
    print(", ".join([city[2]
                     for city in my_cursor.fetchall()
                     if city[4] == argv[4]]))

    """Close cursor and connection"""
    my_cursor.close()
    connection.close()
