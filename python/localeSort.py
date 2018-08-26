import os
import re

fileRe = r"^messages_?([A-Za-z_-]*)\.properties$"
keyRe = r"^([A-Za-z]+)=.*\\n$"


def isComment(string):
    return string[0] == "#"


def normalizeLine(string):
    if string.endswith("\n") == False:
        string = string + "\n"

    return string


def sortFile(filename):
    contents = None

    with open(filename) as file:
        contents = file.readlines()

    comments = [normalizeLine(x) for x in contents if isComment(x)]
    messages = [normalizeLine(x) for x in contents if not isComment(x)]

    messages.sort()

    with open(filename, "w") as file:
        for line in comments + messages:
            print(line, end="", file=file)

    print("Sorted", filename)

for filename in os.listdir("."):
    if re.match(fileRe, filename) == None:
        continue

    sortFile(filename)
