#!/usr/bin/python3
"""
Fetch latest 10 commits of a GitHub repository & print them.
"""

import requests
import sys

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: {} <repository> <owner>".format(sys.argv[0]))
        sys.exit(1)

    repository = sys.argv[1]
    owner = sys.argv[2]

    # GitHub API URL to fetch commits
    url = f"https://api.github.com/repos/{owner}/{repository}/commits"

    try:
        # Fetch latest 10 commits
        response = requests.get(url)
        commits = response.json()[:10]

        for commit in commits:
            sha = commit["sha"]
            author_name = commit["commit"]["author"]["name"]
            print(f"{sha}: {author_name}")

    except requests.RequestException as e:
        print("Error:", e)
