#!/usr/bin/python3
"""
Send request to URL & displays value of X-Request-Id variable in response header
"""

import urllib.request
import sys

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: {} <URL>".format(sys.argv[0]))
        sys.exit(1)

    url = sys.argv[1]

    try:
        with urllib.request.urlopen(url) as response:
            # Check 'X-Request-Id' header presense in response
            if 'X-Request-Id' in response.headers:
                x_request_id = response.headers['X-Request-Id']
                print("X-Request-Id:", x_request_id)
            else:
                print("X-Request-Id header not found in the response.")
    except urllib.error.URLError as e:
        print("Error:", e)
