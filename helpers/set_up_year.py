import os
import datetime
from shutil import copyfile

now = datetime.datetime.now()

year, month, day = now.year, now.month, now.day

file_path = os.path.dirname(os.path.realpath(__file__))
year_path = file_path + "/../" + str(year)
day_path = year_path + "/" + str(day)
templates_path = file_path + "/../templates/python"

if not os.path.exists(year_path):
    print "Creating year... " + str(year)
    os.makedirs(year_path)

if not os.path.exists(day_path):
    print "Creating day... " + str(day)
    os.makedirs(day_path)
    only_files = [f for f in os.listdir(templates_path) if os.path.isfile(os.path.join(templates_path, f))]
    for f in only_files:
        copyfile(os.path.join(templates_path, f), os.path.join(day_path, f))
