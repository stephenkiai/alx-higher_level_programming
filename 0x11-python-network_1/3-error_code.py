#!/usr/bin/python3
"""
Sends request to URL & displays body of response (decoded in utf-8).

Handles urllib.error.HTTPError exceptions.
"""

import urllib.request
import urllib.error
import sys

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: {} <URL>".format(sys.argv[0]))
        sys.exit(1)

    url = sys.argv[1]

    try:
        with urllib.request.urlopen(url) as response:
            response_body = response.read().decode('utf-8')
            print(response_body)
    except urllib.error.HTTPError as e:
        # Handle HTTP errors
        print("Error code:", e.code)
