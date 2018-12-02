import os

file_path = os.path.dirname(os.path.realpath(__file__))

input_path = file_path + "/a.in.txt"

inpt = open(input_path, 'r')

twos = 0
threes = 0

for line in inpt:
    d = {}
    line = line.strip()
    for c in line:
        if c not in d:
            d[c] = 1
        else:
            d[c] += 1
    two_found = False
    three_found = False
    for c in d:
        print c, d[c]
        if d[c] == 2:
            two_found = True
        if d[c] == 3:
            three_found = True
    if two_found:
        twos += 1
    if three_found:
        threes += 1

print twos * threes
