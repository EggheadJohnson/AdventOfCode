import os

file_path = os.path.dirname(os.path.realpath(__file__))

input_path = file_path + "/real.in.txt"

inpt = open(input_path, 'r')

registers = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0
}

instructions = []

pgm_ptr = 0

def handle_instruction(instruction):
    i = instruction.strip().split(' ')

    if i[0] == 'cpy':
        target = i[2]
        if i[1] in ['a', 'b', 'c', 'd']:
            value = registers[i[1]]
        else:
            value = int(i[1])
        registers[target] = value
        return 1
    if i[0] == 'inc':
        target = i[1]
        registers[target] += 1
        return 1
    if i[0] == 'dec':
        target = i[1]
        registers[target] -= 1
        return 1
    if i[0] == 'jnz':
        if i[1] in ['a', 'b', 'c', 'd']:
            value = registers[i[1]]
        else:
            value = int(i[1])
        if value != 0:
            return int(i[2])
        return 1

for line in inpt:
    instructions.append(line.strip())

c = 0

while pgm_ptr < len(instructions):
    if c % 1000 == 0:
        print pgm_ptr, registers
    c += 1
    pgm_ptr += handle_instruction(instructions[pgm_ptr])

print registers
