import os

file_path = os.path.dirname(os.path.realpath(__file__))

input_path = file_path + "/b.in.txt"

inpt = open(input_path, 'r')

seen = {}

freqs = []

for line in inpt:
    freqs.append(int(line))

curr = 0
ctr = 0

while True:
    if curr in seen:
        break
    seen[curr] = 1
    curr += freqs[ctr]
    ctr += 1
    ctr %= len(freqs)

print curr
