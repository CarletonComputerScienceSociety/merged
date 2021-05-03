#!/usr/bin/env python3

# Import of python system library.
# This library is used to download the 'index.html' from server.

import urllib.request

fp = urllib.request.urlopen("http://localhost:1234/")

encodedContent = fp.read()
decodedContent = encodedContent.decode("utf8")

print(decodedContent)

fp.close()