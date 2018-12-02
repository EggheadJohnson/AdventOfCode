import os

file_path = os.path.dirname(os.path.realpath(__file__))

input_path = file_path + "/a.in.txt"

inpt = open(input_path, 'r')

seen = []

def compare(seen, line):
    for comp in seen:
        diffs = 0
        for x in range(len(comp)):
            if comp[x] != line[x]:
                diffs += 1
            if diffs > 1:
                break
        if diffs == 1:
            return comp
    return False

def similars(line_a, line_b):
    out = ''
    for x in range(len(line_a)):
        if line_a[x] == line_b[x]:
            out += line_a[x]
    return out

for line in inpt:
    line = line.strip()

    result = compare(seen, line)
    if result:
        print similars(result, line)
        break
    seen.append(line)
