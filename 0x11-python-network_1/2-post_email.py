#!/usr/bin/python3
"""
Sends POST request with email param to URL & displays response body.
"""

import urllib.parse
import urllib.request
import sys

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: {} <URL> <email>".format(sys.argv[0]))
        sys.exit(1)

    url = sys.argv[1]
    email = sys.argv[2]

    # Create a dictionary
    data = {'email': email}

    # Encode data/create a request
    data = urllib.parse.urlencode(data).encode('utf-8')
    req = urllib.request.Request(url, data)

    try:
        with urllib.request.urlopen(req) as response:
            response_body = response.read().decode('utf-8')
            print(response_body)
    except urllib.error.URLError as e:
        print("Error:", e)
