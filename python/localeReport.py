import os, re


base = "messages.properties"


with open(base) as baseFile:
    baseKeys = re.findall(r"^([a-zA-z]+)=", baseFile.read(), re.MULTILINE)


for filename in os.listdir("."):
    if filename.startswith("messages") and filename.endswith(".properties") and filename != base:
        with open(filename) as compareFile:
            compareKeys = re.findall(r"^([a-zA-z]+)=", compareFile.read(), re.MULTILINE)

        missingKeys = [key for key in baseKeys if key not in compareKeys]
        extraKeys = [key for key in compareKeys if key not in baseKeys]

        print("## {}".format(filename))


        if len(missingKeys) > 0:
            print("### Missing keys ({})".format(len(missingKeys)))
            for k in missingKeys:
                print("* {}".format(k))


        if len(extraKeys) > 0:
            print("### Extra keys ({})".format(len(extraKeys)))
            for k in extraKeys:
                print("* {}".format(k))


        print()
