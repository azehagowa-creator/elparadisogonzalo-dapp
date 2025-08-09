import sys
from biplist import readPlist

if len(sys.argv) != 2:
    print("Usage: python3 decode_plist.py <text.text>")
    sys.exit(1)

plist_file = sys.argv[1]

try:
    data = readPlist(plist_file)
    print(data)
except Exception as e:
    print("Failed to read plist:", e)
