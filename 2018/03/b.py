import os

file_path = os.path.dirname(os.path.realpath(__file__))

input_path = file_path + "/a.in.txt"

inpt = open(input_path, 'r')

def build_cloth(max_x, max_y):
    cloth = []
    for x in range(max_x + 1):
        l = []
        for y in range(max_y + 1):
            l.append(0)
        cloth.append(l)
    return cloth

def add_to_cloth(cloth, option):
    for x in range(option['start_x'], option['end_x']):
        for y in range(option['start_y'], option['end_y']):
            cloth[x][y] += 1

def scan_cloth(cloth):
    count = 0
    for x in range(len(cloth)):
        for y in range(len(cloth[x])):
            if cloth[x][y] > 1:
                count += 1
    return count

max_x = 0
max_y = 0

options = []

for line in inpt:
    line = line.strip().split(' ')
    start = line[2][:-1].split(',')
    size = line[3].split('x')

    # print line, start, size

    curr = {
        'id': line[0],
        'start_x': int(start[0]),
        'start_y': int(start[1]),
        'end_x': int(start[0]) + int(size[0]),
        'end_y': int(start[1]) + int(size[1]),
    }

    if curr['end_x'] > max_x:
        max_x = curr['end_x']
    if curr['end_y'] > max_y:
        max_y = curr['end_y']
    options.append(curr)

cloth = build_cloth(max_x, max_y)
print max_x, max_y

for o in options:
    add_to_cloth(cloth, o)

# print cloth
print scan_cloth(cloth)

def check_for_ones(cloth, option):
    for x in range(option['start_x'], option['end_x']):
        for y in range(option['start_y'], option['end_y']):
            if cloth[x][y] > 1:
                return False
    return True

for o in options:
    if check_for_ones(cloth, o):
        print o
